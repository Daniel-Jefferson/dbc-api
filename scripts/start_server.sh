touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
npm install pm2 -g
pm2 delete backend 
cd /app/backend/back/
pm2 start --name backend index.js
