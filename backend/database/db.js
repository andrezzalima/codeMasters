const { MongoClient } = require('mongodb')


const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const DB_NAME = "codeMasters" 

let client
async function connectToMongo() {
    try {
        if (!client) {
            client = await MongoClient.connect(URL)
        }
        return client;
    } catch (err) {
        console.log(err)
    }
}

async function getMongoCollection(collectionName) {
    const client = await connectToMongo()
    const data = await client.db(DB_NAME).collection(collectionName)
    return data
}

module.exports = { getMongoCollection }