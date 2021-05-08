yarn build
ssh $SERVER_USER@$SERVER_HOST -p $SREVER_PORT
if [ -d "/myfolder" ]; then
  rm -r $SERVER_DEPLOY_DIR/cloudgis
fi
exit
scp ./dist $SERVER_USER@$SERVER_HOST:$SERVER_DEPLOY_DIR/cloudgis -P $SREVER_PORT
