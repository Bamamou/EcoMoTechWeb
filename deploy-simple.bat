@echo off
echo Simple Windows Deployment to ecomotech.online
echo =============================================

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

REM Step 3: Instructions for manual upload
echo.
echo ===============================================
echo MANUAL UPLOAD INSTRUCTIONS
echo ===============================================
echo.
echo Your build is ready in the 'dist' folder.
echo.
echo To deploy to ecomotech.online:
echo.
echo 1. Open an FTP client (like FileZilla)
echo 2. Connect to: ecomotech.online
echo 3. Username: afrixajs
echo 4. Password: [your password]
echo 5. Port: 21 (or try 990 for FTPS)
echo.
echo 6. Navigate to: /home/afrixajs/ecomotech.online/
echo 7. Upload ALL files from the 'dist' folder
echo 8. Overwrite existing files when prompted
echo.
echo Your website will be live at: https://ecomotech.online
echo.
echo ===============================================
echo.
echo Opening dist folder for you...
start explorer dist
echo.
echo Ready to upload! Press any key when done...
pause