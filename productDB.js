require('dotenv').config()
const connectDB = require('./db/db');
const Product = require('./model/product');
const ProductJson = require('./products.json')
const path = require('path')
const fs = require('fs')

const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();

      await Product.create(ProductJson);
      console.log('Success');
    } catch (error) {      
      console.error(error);   
    }
  }
  
  start();