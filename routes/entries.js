const express = require('express');
const router = express.Router();
const entriesCtrl = require('../controllers/entries');
	
//all path start with /entries
router.post('/entries', entriesCtrl.create);
// GET /entries (index function)
router.get('/', entriesCtrl.index);

	
module.exports = router;