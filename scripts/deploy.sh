yarn build
source ${PWD}/.env.local
ssh -p $SERVER_SSH_PORT $SERVER_USER@$SERVER_HOST "trash-empty;trash-put $SERVER_DEPLOY_DIR/cloudgis"
scp -r -P $SERVER_SSH_PORT ./dist $SERVER_USER@$SERVER_HOST:$SERVER_DEPLOY_DIR/cloudgis

cd dist || exit
git init
git add -A
git commit -a -m "deploy"
git push -f git@github.com:zy6p/cloudgis-frontend.git master:gh-pages
