const express = require('express');
const router = express.Router();
const entriesCtrl = require('../controllers/entries');
	
//all path start with /entries
// GET /entries (index function)
router.get('/', entriesCtrl.index);
	
module.exports = router;