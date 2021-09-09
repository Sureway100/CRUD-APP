const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path')

const connectDB = require('./server/database/connection')

const app = express()

/** dotenv =>> this helps us to save our source settings or credentials you wouldnt want to share
to the public...so third party will require to create their own credentials.. you can even git ignore
this file
*/
dotenv.config({path:'./config.env'})
const PORT = process.env.PORT || 8080


//log requests
app.use(morgan('tiny'));


//mongodb connection
connectDB();


//if you want to get the form data (parse form data)
//urlencoded is called body parser
app.use(bodyparser.urlencoded({ extended:true }))


//set view engine
//__dirname means project directory...telling node, to use internal module 'path' and nav to the view file
//app.set("views engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

//load static assets
// app.use(express.static(path.join(__dirname, '/assets')));
//..................
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//your initial route when you dont have a html or ejs file to render
// app.get('/', (req, res) => {
//   console.log('user hit the resource')
//   res.send('crud application')
// })

//load routes..we want to separate our render and routes from our server
//this server.js holds every file necesary for anything to perform its work
app.use('/', require ('./server/routes/router'))
  
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`)
})

//time = 1:49:00














