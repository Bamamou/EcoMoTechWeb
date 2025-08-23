@echo off
echo WinSCP Deployment to ecomotech.online
echo ====================================

REM Step 1: Build the project
echo.
echo Building project for subdomain...
call npm run build:subdomain

if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo SUCCESS: Build completed!

REM Step 2: Verify build
if not exist dist (
    echo ERROR: Build directory 'dist' not found!
    pause
    exit /b 1
)

if not exist dist\index.html (
    echo ERROR: index.html not found in build!
    pause
    exit /b 1
)

echo SUCCESS: Build verification passed!

REM Step 3: Get FTP credentials
set /p username="Enter FTP Username (afrixajs): "
if "%username%"=="" set username=afrixajs

set /p password="Enter FTP Password: "
if "%password%"=="" (
    echo ERROR: Password is required!
    pause
    exit /b 1
)

REM Step 4: Create WinSCP script
echo Creating WinSCP deployment script...

echo open ftp://%username%:%password%@ecomotech.online > winscp_deploy.txt
echo cd /home/afrixajs/ecomotech.online/ >> winscp_deploy.txt
echo put -transfer=binary dist\* >> winscp_deploy.txt
echo exit >> winscp_deploy.txt

echo.
echo WinSCP script created: winscp_deploy.txt
echo.
echo ===============================================
echo DEPLOYMENT OPTIONS
echo ===============================================
echo.
echo Option 1: Use WinSCP (Recommended)
echo   1. Download WinSCP from: https://winscp.net/eng/download.php
echo   2. Install WinSCP
echo   3. Run: winscp.com /script=winscp_deploy.txt
echo.
echo Option 2: Manual FileZilla Upload
echo   1. Download FileZilla from: https://filezilla-project.org/
echo   2. Connect to: ecomotech.online
echo   3. Username: %username%
echo   4. Password: [your password]
echo   5. Upload all files from 'dist' folder to /home/afrixajs/ecomotech.online/
echo.
echo Option 3: Use Built-in Windows FTP
echo   1. Run: ftp ecomotech.online
echo   2. Login with your credentials
echo   3. Use 'put' commands to upload files
echo.
echo ===============================================
echo.
echo Opening dist folder for manual upload...
start explorer dist
echo.
echo Your website will be live at: https://ecomotech.online
echo.
pause