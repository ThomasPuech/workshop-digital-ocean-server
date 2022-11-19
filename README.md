# workshop-digital-ocean-server

For Nick and Doug's workshop to set up a server on digital ocean

## DEPLOY STEPS:

1. login to digital ocean
2. create a new droplet
   1. select cheapest plan
   2. secure it with a password
   3. rename hostname
   4. create droplet
   5. copy ip adress of droplet
3. open new terminal on my computer
   1. type `ssh root@<ip-adress>`
   2. enter the password, you're in!
4. install npm + node on server in terminal
5. ls in root folder (if needed)
6. install pm2
7. pm2 status to see servers running
8. pm2 start server.js
9. firewall set up and activate
10. for continuous dev:
    1. change in vscode locally
    2. then commit to github
    3. then in terminal where logged in droplet server:
       1. git pull
       2. restart server
