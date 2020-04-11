touch ~/.bash_profile
export NVM_DIR="$HOME/.nvm"
who
. /home/ec2-user/.nvm/nvm.sh
nvm install node
npm install pm2 -g
cd /app/backend/back/
pm2 delete backend 
pm2 start --name backend index.js
