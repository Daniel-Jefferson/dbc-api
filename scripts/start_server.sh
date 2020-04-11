_#!/bin/bash_

cd /app/backend/back/ 
pm2 delete backend   
pm2 start --name backend index.js