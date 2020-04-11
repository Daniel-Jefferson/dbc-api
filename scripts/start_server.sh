cd /app/backend/back/
npm install -g pm2
pm2 delete backend   
pm2 start --name backend index.js
