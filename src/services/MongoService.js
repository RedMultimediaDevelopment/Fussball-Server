const MongoClient = require('mongodb').MongoClient;

class MongoService {
  constructor() {
    // Connect to mongodb
    const uri = "mongodb+srv://Maurex:Fussball@cluster0-jtshn.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
    client.connect(err => {
      this.db = client.db("Fussball-Organiser");
      this.collection = this.db.collection("devices");
      this.user_collection = this.db.collection("users");
      console.log("Connected to mongodb");
    });
  }

  async createUser(username, password) {
  await this.user_collection.insertOne(
      {
        user: username,
        pwd: password,
      }
    ).catch(err => console.error(`Failed to insert item: ${err}`))
  }



}

module.exports = MongoService;