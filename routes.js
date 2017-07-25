module.exports = function(app){

		
		var application = require('./routes/application');
		var burger = require('./routes/burger');

		app.use('/', application)
		app.use('/burgers', burger);
		
}