# Windows PowerShell FTP Connection Test Script
# Run this script to test your FTP connection before deployment

param(
    [Parameter(Mandatory=$true)]
    [string]$FtpServer,
    
    [Parameter(Mandatory=$true)]
    [string]$Username,
    
    [Parameter(Mandatory=$true)]
    [string]$Password,
    
    [Parameter(Mandatory=$false)]
    [int]$Port = 21
)

Write-Host "🧪 Testing FTP Connection to ecomotech.online..." -ForegroundColor Green
Write-Host "Server: $FtpServer" -ForegroundColor Yellow
Write-Host "Username: $Username" -ForegroundColor Yellow
Write-Host "Port: $Port" -ForegroundColor Yellow

try {
    # Test DNS resolution first
    Write-Host "`n🔍 Testing DNS resolution..." -ForegroundColor Cyan
    $dnsResult = Resolve-DnsName -Name $FtpServer -ErrorAction Stop
    Write-Host "✅ DNS resolved successfully: $($dnsResult.IPAddress)" -ForegroundColor Green
    
    # Test TCP connection
    Write-Host "`n🔌 Testing TCP connection..." -ForegroundColor Cyan
    $tcpClient = New-Object System.Net.Sockets.TcpClient
    $connect = $tcpClient.ConnectAsync($FtpServer, $Port)
    $wait = $connect.Wait(5000)
    
    if ($wait) {
        Write-Host "✅ TCP connection successful!" -ForegroundColor Green
        $tcpClient.Close()
        
        # Test FTP login
        Write-Host "`n🔐 Testing FTP login..." -ForegroundColor Cyan
        
        # Create FTP request
        $ftpRequest = [System.Net.FtpWebRequest]::Create("ftp://$FtpServer/")
        $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
        $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $ftpRequest.UseBinary = $true
        $ftpRequest.UsePassive = $true
        $ftpRequest.KeepAlive = $false
        
        $response = $ftpRequest.GetResponse()
        Write-Host "✅ FTP login successful!" -ForegroundColor Green
        $response.Close()
        
        Write-Host "`n🎉 All tests passed! Your FTP connection is working." -ForegroundColor Green
        Write-Host "You can now proceed with GitHub deployment." -ForegroundColor Green
        
    } else {
        Write-Host "❌ TCP connection failed - Cannot reach server on port $Port" -ForegroundColor Red
        Write-Host "💡 Possible solutions:" -ForegroundColor Yellow
        Write-Host "   - Check if the server address is correct" -ForegroundColor White
        Write-Host "   - Try different ports: 21 (FTP), 990 (FTPS), 22 (SFTP)" -ForegroundColor White
        Write-Host "   - Contact your hosting provider for correct FTP settings" -ForegroundColor White
    }
    
    $tcpClient.Close()
    
} catch [System.Net.Sockets.SocketException] {
    Write-Host "❌ DNS/Network Error: Cannot resolve or reach $FtpServer" -ForegroundColor Red
    Write-Host "💡 Possible solutions:" -ForegroundColor Yellow
    Write-Host "   - Check your internet connection" -ForegroundColor White
    Write-Host "   - Verify the server address is correct" -ForegroundColor White
    Write-Host "   - Try using the server's IP address instead" -ForegroundColor White
    
} catch [System.Net.WebException] {
    Write-Host "❌ FTP Authentication failed" -ForegroundColor Red
    Write-Host "💡 Possible solutions:" -ForegroundColor Yellow
    Write-Host "   - Check username and password" -ForegroundColor White
    Write-Host "   - Ensure FTP access is enabled in your hosting control panel" -ForegroundColor White
    Write-Host "   - Contact your hosting provider" -ForegroundColor White
    
} catch {
    Write-Host "❌ Unexpected error: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n📋 For GitHub Secrets, use these values:" -ForegroundColor Cyan
Write-Host "FTP_SERVER: $FtpServer" -ForegroundColor White
Write-Host "FTP_USERNAME: $Username" -ForegroundColor White
Write-Host "FTP_PASSWORD: [your_password]" -ForegroundColor White
Write-Host "FTP_PORT: $Port" -ForegroundColor White