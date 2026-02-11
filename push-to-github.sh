#!/bin/bash

# Push demo mode updates to GitHub
echo "🚀 Pushing demo mode updates to GitHub..."
echo ""

git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Your code is now on GitHub"
    echo "2. Netlify should auto-deploy (if connected)"
    echo "3. If not auto-deployed, go to Netlify and manually deploy"
    echo "4. Add environment variable in Netlify:"
    echo "   VITE_DEMO_MODE = true"
    echo ""
    echo "🎉 Then your demo will be live!"
else
    echo ""
    echo "❌ Push failed. You may need to authenticate with GitHub."
    echo ""
    echo "Try one of these:"
    echo "1. Run: git push origin main"
    echo "2. Or use GitHub Desktop to push"
    echo "3. Or authenticate with: gh auth login"
fi
