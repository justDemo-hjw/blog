set -e
npm run build
cd public
git init
git add -A
git commit -m "deploy"
git push -f origin https://${token}@${address} master:master
cd -