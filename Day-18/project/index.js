const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

const dbName = 'anubhav';

// then, we need to use the mongo.connect() function to get reference to our MongoDB client
mongo.connect(url, (err, client)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('Connected successfully to server')
    const db=client.db(dbName)
})


// Now that we have the basic structure down let's look at how we can implement CRUD functionality into our app

const collection = db.collection('test');

// create
collection.insertOne({
    name:'Anubhav',
    password:'1234'
},
((error, item)=>{
    if(error){
        console.error(error)
        return
    }
    console.log(item)
})
)