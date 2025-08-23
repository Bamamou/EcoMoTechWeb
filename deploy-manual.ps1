# Windows PowerShell Manual Deployment Script for ecomotech.online
# This script allows you to deploy manually from your Windows machine

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

Write-Host "🚀 Windows Manual Deployment to ecomotech.online" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green

# Step 1: Build the project
Write-Host "`n🔨 Building project for subdomain..." -ForegroundColor Cyan
try {
    & npm run build:subdomain
    if ($LASTEXITCODE -ne 0) {
        throw "Build failed"
    }
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
} catch {
    Write-Host "❌ Build failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Step 2: Verify build output
Write-Host "`n🔍 Verifying build output..." -ForegroundColor Cyan
if (-not (Test-Path "dist")) {
    Write-Host "❌ Build directory 'dist' not found!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "dist/index.html")) {
    Write-Host "❌ index.html not found in build!" -ForegroundColor Red
    exit 1
}

$fileCount = (Get-ChildItem -Path "dist" -Recurse).Count
Write-Host "✅ Build verification passed! Found $fileCount files." -ForegroundColor Green

# Step 3: Upload files
Write-Host "`n📤 Uploading files to $FtpServer..." -ForegroundColor Cyan

function Upload-Directory {
    param(
        [string]$LocalPath,
        [string]$RemotePath,
        [string]$Server,
        [string]$User,
        [string]$Pass,
        [int]$FtpPort
    )
    
    $uploaded = 0
    $failed = 0
    
    Get-ChildItem -Path $LocalPath -Recurse -File | ForEach-Object {
        $relativePath = $_.FullName.Substring($LocalPath.Length + 1).Replace('\', '/')
        $remoteFile = "$RemotePath$relativePath"
        
        try {
            # Create directory structure if needed
            $remoteDir = Split-Path $remoteFile -Parent
            
            # Upload file
            $ftpUri = "ftp://$Server$remoteFile"
            $ftpRequest = [System.Net.FtpWebRequest]::Create($ftpUri)
            $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
            $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($User, $Pass)
            $ftpRequest.UseBinary = $true
            $ftpRequest.UsePassive = $true
            
            $fileContent = [System.IO.File]::ReadAllBytes($_.FullName)
            $ftpRequest.ContentLength = $fileContent.Length
            
            $requestStream = $ftpRequest.GetRequestStream()
            $requestStream.Write($fileContent, 0, $fileContent.Length)
            $requestStream.Close()
            
            $response = $ftpRequest.GetResponse()
            $response.Close()
            
            Write-Host "✅ Uploaded: $relativePath" -ForegroundColor Gray
            $uploaded++
            
        } catch {
            Write-Host "❌ Failed: $relativePath - $($_.Exception.Message)" -ForegroundColor Red
            $failed++
        }
    }
    
    return @{ Uploaded = $uploaded; Failed = $failed }
}

try {
    $result = Upload-Directory -LocalPath (Resolve-Path "dist").Path -RemotePath $RemotePath -Server $FtpServer -User $Username -Pass $Password -FtpPort $Port
    
    Write-Host "`n📊 Upload Summary:" -ForegroundColor Cyan
    Write-Host "✅ Successfully uploaded: $($result.Uploaded) files" -ForegroundColor Green
    
    if ($result.Failed -gt 0) {
        Write-Host "❌ Failed uploads: $($result.Failed) files" -ForegroundColor Red
        Write-Host "💡 Some files may have failed due to directory structure. This is often normal." -ForegroundColor Yellow
    }
    
    if ($result.Uploaded -gt 0) {
        Write-Host "`n🎉 Deployment completed!" -ForegroundColor Green
        Write-Host "🌐 Your website should be available at: https://ecomotech.online" -ForegroundColor Green
        Write-Host "⏰ Allow a few minutes for changes to propagate." -ForegroundColor Yellow
    }
    
} catch {
    Write-Host "`n❌ Deployment failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "💡 Try running the FTP test script first: ./test-ftp-connection.ps1" -ForegroundColor Yellow
}

Write-Host "`n📝 For future deployments, you can run:" -ForegroundColor Cyan
Write-Host ".\deploy-manual.ps1 -Username 'afrixajs' -Password 'yourpassword'" -ForegroundColor White