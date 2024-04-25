const express = require('express');
const router = express.Router();
const entriesCtrl = require('../controllers/entries');

//all path start with /entries
router.post('/', entriesCtrl.create);
// GET /entries (index function)
router.get('/', entriesCtrl.index);
//GET /entries/:id/edit
router.get('/:candy/edit', entriesCtrl.edit);
// PUT /entries/:candy
router.put('/:candy', entriesCtrl.update);
router.delete('/:cookies', entriesCtrl.delete);
module.exports = router;