var mongo = require('mongodb').MongoClient
    mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
        if(err) throw err;
        var parrots = db.collection('parrots');
        parrots.find({
            age: { $gt: +process.argv[2] }
        }).toArray((err, docs) => {
            if(err) throw err;
            console.log(docs);
            db.close();
        });
});