@echo off
echo 🔍 Finding Correct FTP Settings for ecomotech.online...
echo.

echo 📡 Testing DNS resolution...
nslookup ecomotech.online
echo.

echo 🌐 Testing common FTP server addresses...
echo.

echo Testing ecomotech.online...
ping -n 1 ecomotech.online >nul
if %errorlevel%==0 (
    echo ✅ ecomotech.online - Reachable
) else (
    echo ❌ ecomotech.online - Not reachable
)

echo Testing ftp.ecomotech.online...
ping -n 1 ftp.ecomotech.online >nul 2>nul
if %errorlevel%==0 (
    echo ✅ ftp.ecomotech.online - Reachable
) else (
    echo ❌ ftp.ecomotech.online - Not reachable
)

echo Testing www.ecomotech.online...
ping -n 1 www.ecomotech.online >nul 2>nul
if %errorlevel%==0 (
    echo ✅ www.ecomotech.online - Reachable
) else (
    echo ❌ www.ecomotech.online - Not reachable
)

echo.
echo 🔌 Testing common FTP ports...
echo.

echo Testing port 21 (Standard FTP)...
powershell -Command "& {try { $tcp = New-Object System.Net.Sockets.TcpClient; $connect = $tcp.ConnectAsync('ecomotech.online', 21); if($connect.Wait(3000)) { Write-Host '✅ Port 21 - Open'; $tcp.Close() } else { Write-Host '❌ Port 21 - Closed/Timeout' } } catch { Write-Host '❌ Port 21 - Connection failed' }}"

echo Testing port 990 (FTPS)...
powershell -Command "& {try { $tcp = New-Object System.Net.Sockets.TcpClient; $connect = $tcp.ConnectAsync('ecomotech.online', 990); if($connect.Wait(3000)) { Write-Host '✅ Port 990 - Open'; $tcp.Close() } else { Write-Host '❌ Port 990 - Closed/Timeout' } } catch { Write-Host '❌ Port 990 - Connection failed' }}"

echo Testing port 22 (SFTP)...
powershell -Command "& {try { $tcp = New-Object System.Net.Sockets.TcpClient; $connect = $tcp.ConnectAsync('ecomotech.online', 22); if($connect.Wait(3000)) { Write-Host '✅ Port 22 - Open'; $tcp.Close() } else { Write-Host '❌ Port 22 - Closed/Timeout' } } catch { Write-Host '❌ Port 22 - Connection failed' }}"

echo.
echo 📋 Common FTP Server Formats:
echo    - ecomotech.online
echo    - ftp.ecomotech.online  
echo    - server.ecomotech.online
echo    - Your hosting provider's FTP server
echo.
echo 💡 Next Steps:
echo    1. Contact your hosting provider for exact FTP settings
echo    2. Check your hosting control panel for FTP information
echo    3. Use the PowerShell test script: ./test-ftp-connection.ps1
echo.
pause