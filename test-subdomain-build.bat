@echo off
echo 🧪 Testing Subdomain Build...

REM Clean previous build
echo 🧹 Cleaning previous build...
if exist dist rmdir /s /q dist

REM Build for subdomain
echo 🔨 Building for subdomain...
call npm run build:subdomain

REM Check if build was successful
if not exist dist (
    echo ❌ Build failed - dist directory not found
    exit /b 1
)

if not exist dist\index.html (
    echo ❌ Build failed - index.html not found
    exit /b 1
)

if not exist dist\.htaccess (
    echo ❌ Build failed - .htaccess not found
    exit /b 1
)

echo ✅ Build successful!
echo 📁 Build directory contents:
dir dist

echo 🌐 You can now test locally with:
echo    npm run preview
echo    Then visit http://localhost:8080

echo.
echo 🚀 To deploy, push to main branch and GitHub Actions will handle the rest!