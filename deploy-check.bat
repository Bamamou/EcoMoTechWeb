@echo off
echo 🔍 Pre-deployment verification for EcoMoTech...
echo.

echo 📁 Checking required files...

if exist "package.json" (
    echo ✅ package.json found
) else (
    echo ❌ package.json missing
    exit /b 1
)

if exist "vite.config.ts" (
    echo ✅ vite.config.ts found
) else (
    echo ❌ vite.config.ts missing
    exit /b 1
)

if exist "public\.htaccess" (
    echo ✅ .htaccess found
) else (
    echo ❌ .htaccess missing
    exit /b 1
)

if exist ".github\workflows\deploy-namecheap.yml" (
    echo ✅ GitHub Actions workflow found
) else (
    echo ❌ GitHub Actions workflow missing
    exit /b 1
)

echo.
echo 🏗️ Testing build process...

call npm ci
call npm run build

if exist "dist\index.html" (
    echo ✅ Build successful - index.html created
) else (
    echo ❌ Build failed - index.html missing
    exit /b 1
)

if exist "dist\.htaccess" (
    echo ✅ .htaccess copied to build output
) else (
    echo ❌ .htaccess missing in build output
    exit /b 1
)

echo.
echo 📊 Build output summary:
dir dist

echo.
echo 🎉 All checks passed! Ready for deployment.
echo 🚀 Push to main branch to trigger automatic deployment.
echo 🌐 Your site will be available at: https://ecomotech.online
pause
