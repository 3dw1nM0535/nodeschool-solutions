var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if(err) throw err;
    var col = db.collection(process.argv[3]);

    col.remove({
        _id: process.argv[4]
    }, (err) => {
        if (err) throw err;
        db.close();
    });
});