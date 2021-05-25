const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
const bodyparser=require("body-parser");
const port=8000;
//define mongoose schema:-
const contactSchema=new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String,
    desc:String
});
const Contact=mongoose.model('Contact',contactSchema);
app.use('/static',express.static('static'))//serving static files
app.use(express.urlencoded())

app.set('view engine','pug')//set template engine as pug.
app.set('views',path.join(__dirname, 'views'))//setting views directory

app.get('/', (req, res)=>{ 
    const params={ }
    res.status(200).render('home.pug',params);
})
app.get('/contact', (req, res)=>{ 
    const params={ }
    res.status(200).render('contact.pug',params);
})

app.post('/contact', (req, res)=>{ 
    var myData=new Contact(req.body);
    myData.save().then(()=>{
        res.send("Saved to the database")
    }).catch(()=>{
        res.status(400).send("Item wasn't saved to the database")
    });
})
//start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});