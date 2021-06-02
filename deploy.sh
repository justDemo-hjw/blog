set -e
npm run build
cd public
git init
git add -A
git commit -m "deploy"
git remote add origin https://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@github.com/justDemo-hjw/justDemo-hjw.github.io.git
git push -f origin master
cd -