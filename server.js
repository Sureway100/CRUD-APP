const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path')

const app = express()

dotenv.config({path:'./config.env'})
const PORT = process.env.PORT || 8080


//log requests
app.use(morgan('tiny'));

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

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/add_user', (req, res) => {
  res.render('add_user.ejs')
})


app.listen(PORT, () => {
    console.log('server is listening on port PORT...')
})
  
















