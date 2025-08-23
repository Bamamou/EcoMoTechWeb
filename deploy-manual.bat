@echo off
echo Manual Deployment to ecomotech.online
echo ========================================

set /p username="Enter FTP Username (afrixajs): "
if "%username%"=="" set username=afrixajs

set /p password="Enter FTP Password: "
if "%password%"=="" (
    echo ERROR: Password is required!
    pause
    exit /b 1
)

echo.
echo Building project...
call npm run build:subdomain

if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo SUCCESS: Build completed!
echo.
echo Starting PowerShell deployment...
powershell -ExecutionPolicy Bypass -File "deploy-manual-fixed.ps1" -Username "%username%" -Password "%password%"

echo.
echo Deployment process completed!
echo Check https://ecomotech.online in a few minutes
pause