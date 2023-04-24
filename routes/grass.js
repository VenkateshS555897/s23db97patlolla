var express = require('express');
const grass_controllers = require('../controllers/grass');
var router = express.Router();

const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }
/* GET home page.
router.get('/', function(req, res, next) {
  res.render('grass', { title: 'grass' });
});
 */
module.exports = router;
/* GET detail grass page */
router.get('/', grass_controllers.grass_view_all_Page);
router.get('/grass/:id', grass_controllers.grass_detail);
/* GET detail grass page */
router.get('/detail', grass_controllers.grass_view_one_Page);

/* GET detail grass page */
router.get('/create', grass_controllers.grass_create_Page);

/* GET detail grass page */
router.get('/update',secured, grass_controllers.grass_update_Page);

/* GET detail grass page */
router.get('/delete', grass_controllers.grass_delete_Page);