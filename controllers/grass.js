var grass = require('../models/grass');
// List of all Gifts
exports.grass_list = async function(_req, res) {
    try{
        thegrass = await grass.find();
        res.send(thegrass);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};

// Handle Costume create on POST.
exports.grass_create_post = async function(req, res) {
    console.log(req.body)
    let document = new grass();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"grass_name":"image1", "size":"large", "cost":1000}
    document.grass_name = req.body.grass_name;
    document.size = req.body.size;
    document.cost = req.body.cost;
    // console.log(document);
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(error){
    res.status(500);
    res.send(`{"error": ${error}}`);
    console.log(error)
    }
   };
// Handle grass create on POST.
exports.grass_detail = async function(_req, res) {
    try{
        thegrass = await grass.find();
        res.send(thegrass);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
//res.send('NOT IMPLEMENTED: Gift create POST');
};
// Handle Gift delete form on DELETE.
exports.grass_delete = async function(_req, res) {
    try{
        thegrass = await grass.find();
        res.send(thegrass);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: Gift delete DELETE ' + req.params.id);
};
// Handle Gift update form on PUT.
exports.grass_update_put = async function(_req, res) {
    try{
        thegrass = await grass.find();
        res.send(thegrass);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: Gift update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.grass_view_all_Page = async function(_req, res) {
try{
thegrass = await grass.find();
res.render('grass', { title: 'grass Search Results', results: thegrass });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};