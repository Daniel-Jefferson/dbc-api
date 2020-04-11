export PM2_HOME=/home/ec2-user/.pm2  
pm2 delete backend 
cd /app/backend/back/
pm2 start --name backend index.js
