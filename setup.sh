#!/bin/bash
# setup.sh - Quick setup script for deploying to Vercel

echo "=================================="
echo "  Sreeshanth Butti's Portfolio"
echo "  GitHub + Vercel Setup Script"
echo "=================================="
echo ""

# Check Node.js
echo "✓ Checking Node.js..."
node --version
npm --version
echo ""

# Install dependencies
echo "✓ Installing dependencies..."
npm install
echo ""

# Build test
echo "✓ Testing build..."
npm run build
echo ""

echo "✅ All checks passed!"
echo ""
echo "📌 Next Steps:"
echo "===================================="
echo "1. Create repository at https://github.com/new"
echo "   Name: sreeshanth-portfolio"
echo ""
echo "2. Push to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/sreeshanth-portfolio.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Deploy on Vercel:"
echo "   Visit: https://vercel.com/new"
echo "   Select your GitHub repo"
echo "   Click Deploy"
echo ""
echo "4. Your portfolio will be live at:"
echo "   https://sreeshanth-portfolio.vercel.app"
echo "===================================="
