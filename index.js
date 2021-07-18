const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(cors())
app.use(bodyParser.json())
const port = 5000
// console.log(process.env.DB_USER);
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kv6ok.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("shopnest").collection("products");
  app.get('/', (req, res) => {
    res.send('Hello world!')
  })




});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})