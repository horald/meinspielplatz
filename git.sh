git add --all
if [ "$1" != "" ]; then
  echo "$1"
  git commit -m "$1"
else
  echo "Changes of Vers 1.00.018"
  git commit -m "Changes of Vers 1.00.018"
fi
git push


