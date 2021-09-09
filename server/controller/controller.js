//require model file
var Userdb = require('../model/model')

//this controller is like your sql manipulation
//create and save new user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message:"content can not be empty"})
        return;
    }
    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
        
    })
    //save user in the database
    user
        .save(user)
        .then(data=> {
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || 'some error occured white creating a create operation'
            });
        });
}


//retrieve all or a single user
exports.find = (req,res) => {

}

//update a new id identified by user id
exports.update = (req,res) => {

}
//delete a new id identified by user id
exports.delete = (req,res) => {

}