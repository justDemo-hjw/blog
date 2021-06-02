set -e
npm run build
cd public
git init
git add -A
git commit -m "deploy"
# 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
# git remote add origin https://${token}@${address}
git push -f origin https://${token}@${address} master:master
cd -