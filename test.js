const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const url = 'mongodb+srv://khayrul123:khayrul123@cluster0-6kqzz.mongodb.net/test?retryWrites=true';
MongoClient.connect(url, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   //const collection = client.db("test").collection("devices");
   insertData('test','devices', {"name":"khayrul"});
   // perform actions on the collection object
   client.close();
});

function insertData(database, table, data){
    //response.setHeader('Content-Type', 'text/html');
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
        if(err) {
            console.log('Error connecting to database.');
        }
        dbObject = db.db(database);
        dbObject.collection(table).insertOne(data, function(err){
            if(err) {
                console.log('Error inserting data.');
            }
            db.close();
            console.log('Inserted');
        });
    });
}