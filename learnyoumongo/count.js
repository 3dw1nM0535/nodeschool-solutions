var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
   if(err) throw err;
   
   var parrots = db.collection('parrots');
   parrots.count({
       age: { $gt: +process.argv[2] }
   }, (err, count) => {
       if(err) throw err;
       console.log(count);
       db.close();
   });
});