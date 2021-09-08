//services are the backend operations for everything...
/**
 * when routes receives the client method either GET OR POST, it calls the 
 * services to service what is related to the method received
 */
//this will allow us render different files using routers

exports.homeRoutes = (req,res) => {
    res.render("index.ejs");
}
exports.add_user = (req,res) => {
    res.render("add_user.ejs");
}
exports.update_user = (req,res) => {
    res.render("update_user.ejs");
}