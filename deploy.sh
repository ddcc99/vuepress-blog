#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.ddcc.website' > CNAME

git init
git add -A
git commit -m 'commit blog pages'

git push -f git@github.com:ddcc99/blog.git master:blog-page

cd -