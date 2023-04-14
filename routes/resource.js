var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var grass_controller = require('../controllers/grass');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Gift ROUTES ///
// POST request for creating a Gift.
router.post('/grass', grass_controller.grass_create_post);
// DELETE request to delete Gift.
router.delete('/grass/:id', grass_controller.grass_delete);
// PUT request to update Gift.
router.put('/grass/:id', grass_controller.grass_update_put);
// GET request for one Gift.
router.get('/grass/:id', grass_controller.grass_detail);
// GET request for list of all Gift items.
router.get('/grass', grass_controller.grass_list);
module.exports = router;