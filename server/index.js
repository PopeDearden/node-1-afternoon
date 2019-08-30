const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const app = express()

const port = 3001

// const products = require('./products.json')

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct)


app.listen(port, () => {
    console.log(`Making tasty toast on port: ${port} `)
})
