touch ~/.bash_profile
export NVM_DIR="$HOME/.nvm"
pwd
. ~/.nvm/nvm.sh
nvm install node
npm install pm2 -g
pm2 delete backend 
cd /app/backend/back/
pm2 start --name backend index.js
