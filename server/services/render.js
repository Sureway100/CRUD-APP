const axios = require("axios");

//services are the backend operations for everything...
/**
 * when routes receives the client method either GET OR POST, it calls the 
 * services to service what is related to the method received
 */
//this will allow us render different files using routers

exports.homeRoutes = (req,res) => {
    axios.get("http://localhost:5000/api/users")
    .then(function(response){
        //console.log(response)
        res.render("index.ejs", {users:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}
exports.add_user = (req,res) => {
    res.render("add_user.ejs");
}
exports.update_user = (req,res) => {
    axios.get("http://localhost:5000/api/users", {params:{id:req.query.id}})
    .then(function(userdata){
        // console.log(userdata.data)
        res.render("update_user.ejs", {user:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
}