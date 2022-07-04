const mongo =require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'exampleproject'

mongo.connect(url, (err, client) => {
    if(err){
        console.error(err)
        return;
    }
    console.log('Connected successfully to server')
    const db = client.db(anubhav)
});

const collection = db.collection('test')

// to create data in the database
collection.insertOne({name:'Test', password:'1234'}, ((error, item)=>{
    if(error){
        console.error(error)
        return;
    }
    console.log(item)
}))