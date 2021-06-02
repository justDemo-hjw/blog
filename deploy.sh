set -e
npm run build
cd public
git init
git add -A
git commit -m "deploy"
git push -f https://${secrets.ACCESS_TOKEN}@github.com/justdemo-hjw/justdemo-hjw.github.io.git master:master
cd -