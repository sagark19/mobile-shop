const express = require('express')
const app = express()
const mongoose = require('mongoose');



// Database Connection 
mongoose.connect('mongodb://localhost:27017/mobileshop',{
    useNewUrlParser : true,
    useUnifiedTopology: true
}); 


const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const productRoute = require('./api/routes/productRoute')
app.use('/product', productRoute);


app.listen(4000,() => {
    console.log('server started successfully!')
})