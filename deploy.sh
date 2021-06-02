set -e
npm run build
cd public
git init
git add -A
git commit -m "deploy"
echo 1111
echo ${env}
git push -f https://${env.TOKEN}@github.com/justdemo-hjw/justdemo-hjw.github.io.git master:master
cd -