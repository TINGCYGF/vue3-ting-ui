rm -rf dist &&
vite build &&
cd dist &&
git init &&
git add . &&
git commit -m "Update" &&
git branch -M master &&
git remote add origin git@gitee.com:TINGCYGF/ting-ui-vue3.git &&
git push -f -u origin master &&
cd - &&
echo https://tingcygf.gitee.io/ting-ui-vue3/#/