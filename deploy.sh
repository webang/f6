#/bin/bash

rm -rf dist
cp -r packages/site/dist .

# if [$1 = ""]
# then
#     echo "commit message is require"
#     exit 1
# fi

git add .
git commit -m "$1"
git push

exit 0