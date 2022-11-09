#! /bin/bash
echo "Enter Message: "
read message;

git add *;
git commit -m "$message";

git pull origin main;

git push;