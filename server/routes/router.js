const express = require('express')
const route = express.Router()

const services = require('../services/render');

const controller = require('../controller/controller')

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


/**GET METHOD FOR HOME ROUTE */
route.get('/', services.homeRoutes);

/**GET METHOD FOR add user ROUTE */
route.get('/add_user', services.add_user)

/**GET METHOD FOR update ROUTE */
route.get('/update_user', services.update_user)
  
//API....when the route is matched
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route