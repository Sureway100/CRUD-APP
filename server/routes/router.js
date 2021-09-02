const express = require('express')
const route = express.Router()

// app.get('/', (req, res) => {
//   res.render('index.ejs')
// })

// app.get('/add_user', (req, res) => {
//   res.render('add_user.ejs')
// })

// app.get('/update_user', (req, res) => {
//   res.render('update_user.ejs')
// })


// app.listen(PORT, () => {
//     console.log('server is listening on port PORT...')
// })


route.get('/', (req, res) => {
    res.render('index.ejs')
  })
  
route.get('/add_user', (req, res) => {
    res.render('add_user.ejs')
  })
  
route.get('/update_user', (req, res) => {
    res.render('update_user.ejs')
  })
  
  


module.exports = route