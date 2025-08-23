# Robust Windows PowerShell Deployment Script for ecomotech.online
# This script handles common FTP connection issues on Windows

param(
    [Parameter(Mandatory=$false)]
    [string]$FtpServer = "ecomotech.online",
    
    [Parameter(Mandatory=$true)]
    [string]$Username,
    
    [Parameter(Mandatory=$true)]
    [string]$Password,
    
    [Parameter(Mandatory=$false)]
    [int]$Port = 21,
    
    [Parameter(Mandatory=$false)]
    [string]$RemotePath = "/home/afrixajs/ecomotech.online/"
)

Write-Host "Robust Windows Deployment to ecomotech.online" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green

# Step 1: Build the project
Write-Host "`nBuilding project for subdomain..." -ForegroundColor Cyan
try {
    & npm run build:subdomain
    if ($LASTEXITCODE -ne 0) {
        throw "Build failed"
    }
    Write-Host "SUCCESS: Build completed successfully!" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Build failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Step 2: Verify build output
Write-Host "`nVerifying build output..." -ForegroundColor Cyan
if (-not (Test-Path "dist")) {
    Write-Host "ERROR: Build directory 'dist' not found!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "dist/index.html")) {
    Write-Host "ERROR: index.html not found in build!" -ForegroundColor Red
    exit 1
}

$fileCount = (Get-ChildItem -Path "dist" -Recurse -File).Count
Write-Host "SUCCESS: Build verification passed! Found $fileCount files to upload." -ForegroundColor Green

# Step 3: Test FTP connection first
Write-Host "`nTesting FTP connection..." -ForegroundColor Cyan
try {
    $testUri = "ftp://$FtpServer/"
    $testRequest = [System.Net.FtpWebRequest]::Create($testUri)
    $testRequest.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
    $testRequest.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
    $testRequest.UsePassive = $true
    $testRequest.UseBinary = $true
    $testRequest.KeepAlive = $false
    $testRequest.Timeout = 30000
    
    $testResponse = $testRequest.GetResponse()
    $testResponse.Close()
    Write-Host "SUCCESS: FTP connection test passed!" -ForegroundColor Green
} catch {
    Write-Host "ERROR: FTP connection test failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "SUGGESTION: Try different settings:" -ForegroundColor Yellow
    Write-Host "  - Server: ftp.ecomotech.online" -ForegroundColor White
    Write-Host "  - Port: 990 (FTPS)" -ForegroundColor White
    Write-Host "  - Check your firewall settings" -ForegroundColor White
    exit 1
}

# Step 4: Upload files with retry mechanism
Write-Host "`nUploading files to $FtpServer..." -ForegroundColor Cyan

function Upload-FileWithRetry {
    param(
        [string]$LocalFile,
        [string]$RemoteFile,
        [string]$Server,
        [string]$User,
        [string]$Pass,
        [int]$MaxRetries = 3
    )
    
    for ($retry = 1; $retry -le $MaxRetries; $retry++) {
        try {
            $ftpUri = "ftp://$Server$RemoteFile"
            $ftpRequest = [System.Net.FtpWebRequest]::Create($ftpUri)
            $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
            $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($User, $Pass)
            $ftpRequest.UseBinary = $true
            $ftpRequest.UsePassive = $true
            $ftpRequest.KeepAlive = $false
            $ftpRequest.Timeout = 60000
            
            $fileContent = [System.IO.File]::ReadAllBytes($LocalFile)
            $ftpRequest.ContentLength = $fileContent.Length
            
            $requestStream = $ftpRequest.GetRequestStream()
            $requestStream.Write($fileContent, 0, $fileContent.Length)
            $requestStream.Close()
            
            $response = $ftpRequest.GetResponse()
            $response.Close()
            
            return $true
            
        } catch {
            if ($retry -eq $MaxRetries) {
                Write-Host "FAILED after $MaxRetries attempts: $(Split-Path $LocalFile -Leaf) - $($_.Exception.Message)" -ForegroundColor Red
                return $false
            } else {
                Write-Host "Retry $retry for $(Split-Path $LocalFile -Leaf)..." -ForegroundColor Yellow
                Start-Sleep -Seconds 2
            }
        }
    }
    return $false
}

$uploaded = 0
$failed = 0
$totalFiles = (Get-ChildItem -Path "dist" -Recurse -File).Count
$current = 0

Get-ChildItem -Path "dist" -Recurse -File | ForEach-Object {
    $current++
    $relativePath = $_.FullName.Substring((Resolve-Path "dist").Path.Length + 1).Replace('\', '/')
    $remoteFile = "$RemotePath$relativePath"
    
    Write-Progress -Activity "Uploading files" -Status "Processing $relativePath" -PercentComplete (($current / $totalFiles) * 100)
    
    if (Upload-FileWithRetry -LocalFile $_.FullName -RemoteFile $remoteFile -Server $FtpServer -User $Username -Pass $Password) {
        Write-Host "SUCCESS: $relativePath" -ForegroundColor Gray
        $uploaded++
    } else {
        $failed++
    }
}

Write-Progress -Completed -Activity "Uploading files"

# Step 5: Summary
Write-Host "`nUpload Summary:" -ForegroundColor Cyan
Write-Host "Successfully uploaded: $uploaded files" -ForegroundColor Green
Write-Host "Failed uploads: $failed files" -ForegroundColor Red

if ($uploaded -gt 0) {
    Write-Host "`nDeployment completed!" -ForegroundColor Green
    Write-Host "Your website should be available at: https://ecomotech.online" -ForegroundColor Green
    Write-Host "Allow a few minutes for changes to propagate." -ForegroundColor Yellow
    
    if ($failed -gt 0) {
        Write-Host "`nTo retry failed uploads, run this script again." -ForegroundColor Yellow
    }
} else {
    Write-Host "`nDeployment failed completely!" -ForegroundColor Red
    Write-Host "SUGGESTIONS:" -ForegroundColor Yellow
    Write-Host "1. Check your FTP credentials" -ForegroundColor White
    Write-Host "2. Try using FileZilla manually" -ForegroundColor White
    Write-Host "3. Contact your hosting provider" -ForegroundColor White
}

Write-Host "`nFor future deployments:" -ForegroundColor Cyan
Write-Host ".\deploy-robust.ps1 -Username 'afrixajs' -Password 'yourpassword'" -ForegroundColor White