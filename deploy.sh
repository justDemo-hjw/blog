set -e
npm run build
cd public
git init
git add -A
git commit -m "deploy"
console.log(1)
console.log(${TOKEN})
git push -f https://${TOKEN}@github.com/justdemo-hjw/justdemo-hjw.github.io.git master:master
cd -