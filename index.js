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
 const collection = client.db("emaJohnStore").collection("products");
 // perform actions on the collection object


 // get product from products
 app.get('/getProductss', (req, res) => {
  collection.find({})
   .toArray((err, document) => {
    res.send(document)
   })
 })

 // post something to out goodthings data base
 app.post('/addSomething', (req, res) => {
  const data = req.body
  console.log(data);
  collection2.insertOne(data)
   .then(result => console.log(result))
 })



 app.get('/', (req, res) => {
  res.send('This is from index')
 })





});

app.listen(process.env.PORT || port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})