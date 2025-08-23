#!/bin/bash

# Test script for subdomain deployment
echo "🧪 Testing Subdomain Build..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Build for subdomain
echo "🔨 Building for subdomain..."
npm run build:subdomain

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    echo "❌ Build failed - index.html not found"
    exit 1
fi

if [ ! -f "dist/.htaccess" ]; then
    echo "❌ Build failed - .htaccess not found"
    exit 1
fi

echo "✅ Build successful!"
echo "📁 Build directory contents:"
ls -la dist/

echo "📦 Build size:"
du -sh dist

echo "🌐 You can now test locally with:"
echo "   npm run preview"
echo "   Then visit http://localhost:8080"

echo ""
echo "🚀 To deploy, push to main branch and GitHub Actions will handle the rest!"