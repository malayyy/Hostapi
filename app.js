require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/db')
const { getAllProducts, getAllproductsTesting } = require('./controller/productcontroller'); // F
const PORT = process.env.PORT || 5000;

const products_routes =require('./routes/productroutes')


app.get('/',(req,res)=>{
res.send('Ypp')
})

//middleware or to set router

app.use('/api/products',products_routes);



const start = async(req,res)=>{
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT,()=>{
            console.log('server is start on port'+PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

start()