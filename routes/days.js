const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const daysCtrl = require('../controllers/days');
	
// GET /days
router.get('/', daysCtrl.index);
// GET /days/new
// router.get('/new', daysCtrl.new);
// // GET /days/:id (show functionality) MUST be below new route
// router.get('/:id', daysCtrl.show);
// // POST /days
// router.post('/', daysCtrl.create);
	
module.exports = router;