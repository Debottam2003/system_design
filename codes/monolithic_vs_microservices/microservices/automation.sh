#___Installing Dependencies___
npm install

#___Running the Microservices___
node orders.js &
node users.js &
node catalogs.js &
node payments.js &

#___Running the API-gateway___
node app.js &
