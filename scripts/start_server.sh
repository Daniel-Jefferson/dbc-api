export PM2_HOME=/home/ec2-user/.pm2
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
sudo npm install pm2 -g
pm2 delete backend 
cd /app/backend/back/
pm2 start --name backend index.js
