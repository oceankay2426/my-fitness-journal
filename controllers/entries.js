const Entry = require('../models/entry');
const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December',
];

module.exports = {
  index
};

async function index(req, res) {
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
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month, daysInMo);
  const entries = await Entry.find({date: {$gte: startDate, $lte: endDate}});
  res.render('entries/index', { title: 'MONTHLY LOG', entries, year, month, monthNames });
};
