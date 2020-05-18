const http       = require('http');
const express    = require('express');
const bodyParser = require('body-parser');

const restPort = process.env.PORT || 9070;

const UserController = require('./src/controllers/UserController');
const UserService = require('./src/services/UserService');
const MongoService = require('./src/services/MongoService');

// Rest server
const app = express();
const restServer   = http.createServer(app);

const mongoService = new MongoService();
const userService = new UserService(mongoService);

// Set helpers
app.use(express.json());
app.use(express.static('public'))

const userController = new UserController(userService, '/v1', app);

app.use("*", express.static('public'))

restServer.listen(restPort, function() {
  console.log(`Rest server listening on port ${restPort}`);
});
