const express = require('express');
const app =express();
const mongoose =require('mongoose');
const dotenv= require('dotenv');

//Import routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts')

dotenv.config();
//Connect db
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true,useUnifiedTopology: true  } , ()=>{
    console.log('Connected to db')
});

//Middlewares
app.use(express.json())


//Route middleqqares
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000, ()=>console.log('Server up and running!'));