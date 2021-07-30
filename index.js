const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());

// routers
const productRouter = require('./routers/productRouter');
const orderRouter = require('./routers/orderRouter');
app.use('/products', productRouter);
app.use('/order', orderRouter);

const PORT = process.env.PORT || 8080;
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kv6ok.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected '))
  .catch((err) => console.log(err));

app.listen(port | process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

