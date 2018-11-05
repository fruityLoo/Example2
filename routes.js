var bodyParser = require('body-parser');

var homeController = require('./controllers/HomeController');
var userController = require('./controllers/UserController');

var urlEncodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
	app.get('/', homeController.index);
	app.get('/user', userController.index);
	app.get('/user/register', userController.register);
	app.post('/user/register', urlEncodedParser, userController.save);
}

// kC8vHkqcRbn5