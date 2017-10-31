const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//Connect to mlab

const uri = 'mongodb://ritali:199228lxy@ds231315.mlab.com:31315/shopping_list';
var recipes;
  MongoClient.connect(uri,function(err,db){
    if(err) throw err;
    console.log("successfully connected!");
      recipes = db.collection('Recipes');

});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
   //db.close(function(err){
      //  if(err)throw err;
  //  })
//})
router.get('/recipes', function(req,res){

    recipes.find({}).toArray(function(err,task){
      if(err){
      //  console.log(err);
        res.send(err);
        res.end();
    }else
    {
      //console.log(task);
     res.json(task);

    }
  })
});

  router.post('/recipes', function(req,res){
       var data = req.body;
       console.log(data);

      /*  recipes.find({}).toArray(function(err,task){
          if(err){
          //  console.log(err);
            res.send(err);
            res.end();
        }else
        {
          //console.log(task);
         res.json(task);

        }
      })*/

})

module.exports = router;
