git add --all
if [ "$1" != "" ]; then
  echo "$1"
  git commit -m "$1"
else
  echo "Changes of Vers 1.00.014"
  git commit -m "Changes of Vers 1.00.014"
fi
git push meinspielplatz gh-pages


