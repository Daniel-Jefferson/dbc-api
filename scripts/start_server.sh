touch ~/.bash_profile
. /home/ec2-user/.nvm/nvm.sh
nvm install node
npm install pm2 -g
cd /app/backend/back/
pm2 restart backend
