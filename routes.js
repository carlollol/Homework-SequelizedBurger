module.exports = function(app){
  // Our model controllers (rather than routes)
  var burgers_controller = require('./controllers/burger_controller.js');

  app.use('/', burgers_controller);
}