var db = require("../models");


exports.index = function(req, res) {
 
  db.Burger.findAll()
    
    .then(function(dbBurger) {
      console.log(dbBurger);
      
      var hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
    });
};