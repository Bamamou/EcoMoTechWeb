#!/bin/bash

echo "🚀 EcoMoTech Deployment Script"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

echo ""
echo "Which deployment would you like to run?"
echo "1. GitHub Pages only"
echo "2. Netlify only"  
echo "3. Both GitHub Pages and Netlify"
echo ""

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        print_status "Deploying to GitHub Pages..."
        npm run build:github && npm run deploy
        if [ $? -eq 0 ]; then
            print_status "GitHub Pages deployment completed!"
            print_status "Visit: https://bamamou.github.io/EcoMoTechWeb/"
        else
            print_error "GitHub Pages deployment failed!"
        fi
        ;;
    2)
        echo ""
        print_status "Building for Netlify..."
        npm run build:netlify
        if [ $? -eq 0 ]; then
            print_status "Netlify build completed!"
            print_warning "Please push to your repository to trigger Netlify deployment"
            print_warning "Or run: netlify deploy --prod --dir=dist"
        else
            print_error "Netlify build failed!"
        fi
        ;;
    3)
        echo ""
        print_status "Deploying to both platforms..."
        
        # GitHub Pages deployment
        print_status "Building for GitHub Pages..."
        npm run build:github && npm run deploy
        if [ $? -eq 0 ]; then
            print_status "GitHub Pages deployment completed!"
        else
            print_error "GitHub Pages deployment failed!"
        fi
        
        echo ""
        
        # Netlify deployment
        print_status "Building for Netlify..."
        npm run build:netlify
        if [ $? -eq 0 ]; then
            print_status "Netlify build completed!"
            print_warning "Please push to your repository to trigger Netlify deployment"
        else
            print_error "Netlify build failed!"
        fi
        ;;
    *)
        print_error "Invalid choice. Please run the script again and choose 1, 2, or 3."
        exit 1
        ;;
esac

echo ""
print_status "Deployment process completed!"
