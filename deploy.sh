set -e
npm run build
cd public
git init
git add -A
git commit -m "deploy"
echo ${process.env.TOKEN}
echo 1111
git push -f https://${process.env.TOKEN}@github.com/justdemo-hjw/justdemo-hjw.github.io.git master:master
cd -