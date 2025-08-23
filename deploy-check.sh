#!/bin/bash

# Pre-deployment verification script
echo "🔍 Pre-deployment verification for EcoMoTech..."
echo ""

# Check if all required files exist
echo "📁 Checking required files..."

if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json missing"
    exit 1
fi

if [ -f "vite.config.ts" ]; then
    echo "✅ vite.config.ts found"
else
    echo "❌ vite.config.ts missing"
    exit 1
fi

if [ -f "public/.htaccess" ]; then
    echo "✅ .htaccess found"
else
    echo "❌ .htaccess missing"
    exit 1
fi

if [ -f ".github/workflows/deploy-namecheap.yml" ]; then
    echo "✅ GitHub Actions workflow found"
else
    echo "❌ GitHub Actions workflow missing"
    exit 1
fi

echo ""
echo "🏗️  Testing build process..."

# Install dependencies and build
npm ci
npm run build

# Check if build was successful
if [ -f "dist/index.html" ]; then
    echo "✅ Build successful - index.html created"
else
    echo "❌ Build failed - index.html missing"
    exit 1
fi

if [ -f "dist/.htaccess" ]; then
    echo "✅ .htaccess copied to build output"
else
    echo "❌ .htaccess missing in build output"
    exit 1
fi

echo ""
echo "📊 Build output summary:"
echo "$(ls -la dist/)"

echo ""
echo "🎉 All checks passed! Ready for deployment."
echo "🚀 Push to main branch to trigger automatic deployment."
echo "🌐 Your site will be available at: https://ecomotech.online"
