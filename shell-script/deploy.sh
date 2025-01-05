#!/bin/bash
git pull
bun i
export NODE_OPTIONS="--max-old-space-size=8192"
bun run build
pm2 restart all
echo "Deployed successfully"
 
 # The above script will pull the latest changes from the repository, build the project, restart the server, and print the message “Deployed successfully”. 
 # To run the script, you need to give execute permission to the file. 
 #$ chmod +x deploy.sh
