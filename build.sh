#!/bin/sh
echo "installing backend"
cd './backend'
npm i
echo "installing frontend"
cd '..'
cd './frontend/my-app'
yarn
yarn build
cd '..'