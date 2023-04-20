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

// Handle grass create on POST.
exports.grass_create_post = async function(req, res) {
    console.log(req.body)
    let document = new grass();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"grass_name":"image1", "size":"large", "cost":1000}
    document.Grass_Name = req.body.Grass_Name;
    document.Grass_color = req.body.Grass_color;
    document.Height = req.body.Height;
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
 res.send('NOT IMPLEMENTED: Gift update PUT' + req.params.id);
};

// Handle grass delete on DELETE.
exports.grass_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await grass.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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

// for a specific grass.
exports.grass_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await grass.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

   // Handle grass update form on PUT.
exports.grass_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await grass.findById( req.params.id)
 // Do updates of properties
 if(req.body.Grass_Name)
 toUpdate.Grass_Name = req.body.Grass_Name;
 if(req.body.Grass_color) toUpdate.Grass_color = req.body.Grass_color;
 if(req.body.Height) toUpdate.Height = req.body.Height;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle a show one view with id specified by query
exports.grass_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await grass.findById( req.query.id)
    res.render('grassdetail',
   { title: 'grass Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a grass.
// No body, no in path parameter, no query.
// Does not need to be async
exports.grass_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('grasscreate', { title: 'grass Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a grass.
// query provides the id
exports.grass_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await grass.findById(req.query.id)
    res.render('grassupdate', { title: 'grass Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a delete one view with id from query
exports.grass_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await grass.findById(req.query.id)
    res.render('grassdelete', { title: 'grass Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };