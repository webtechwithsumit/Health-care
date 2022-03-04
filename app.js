const express=require("express");
const path=require("path");
const app=express();
const fs=require("fs");
const port=80;


app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/about', (req, res)=>{
    const params = {}
    res.status(200).render('about.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.get('/appointment', (req, res)=>{
    const params = {}
    res.status(200).render('appointment.pug', params);
})
app.get('/services', (req, res)=>{
    const params = {}
    res.status(200).render('services.pug', params);
})
app.get('/myReport', (req, res)=>{
    const params = {}
    res.status(200).render('myReport.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});