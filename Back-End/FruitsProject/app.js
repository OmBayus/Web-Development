const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url,{ useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    findDocuments(db, function() {
      client.close();
    });
  });
});

  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
      // Insert some documents
    collection.insertMany([
        {
          name: "Apple",
          score: 11,
          review: "Great fruit"
        },
      ], function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        assert.equal(1, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
      });
  }

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({score:11}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs[0].score);
      callback(docs);
    });
  }
