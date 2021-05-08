yarn build
ssh $SERVER_USER@$SERVER_HOST -p $SREVER_PORT
if [ -d "$SERVER_DEPLOY_DIR/cloudgis" ]; then
  rm -r $SERVER_DEPLOY_DIR/cloudgis
fi
exit
scp -r -P $SREVER_PORT ./dist $SERVER_USER@$SERVER_HOST:$SERVER_DEPLOY_DIR/cloudgis
