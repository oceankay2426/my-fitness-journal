const express = require('express');
const router = express.Router();
const entriesCtrl = require('../controllers/entries');
	
//all path start with /entries

const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
  ];
  
  router.get('/calendar', function(req, res, next) {
    let year = parseInt(req.query.year);
    let month = parseInt(req.query.month);
    if (month === -1) {
      year--;
      month = 11;
    } else if (month === 12) {
      year++;
      month = 0;
    }
  
    // Default to today's year and month if not specified
    if (!year) {
      const today = new Date();
      year = today.getFullYear();
      month = today.getMonth();
    }
  
    const daysInMo = new Date(year, month + 1, 0).getDate();
    const dow = new Date(year, month, 1).getDay() + 1;
  
    res.render('entries/index', { year, month, monthNames, daysInMo, dow, title: 'fit'}); 
  });
// GET /entries (index function)
router.get('/', entriesCtrl.index);
	
module.exports = router;