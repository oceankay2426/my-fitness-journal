const Entry = require('../models/entry');
const exercise = require('../models/exercise');
const Exercise = require('../models/exercise');
const user = require('../models/user');
const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December',
];

module.exports = {
  index,
  create
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
  const entries = await Entry.find({date: {$gte: startDate, $lte: endDate}}).populate("exercise");
  const exercises = await Exercise.find()
  res.render('entries/index', { title: 'MONTHLY LOG', entries, year, month, monthNames, exercises});
};
async function create(req, res) {
  const month = parseInt(req.body.month) + 1;
  const date = new Date(`${req.body.year}, ${month}, ${req.body.day}`);
  req.body.date = date;
  req.body.user = req.user._id
  const entry = await Entry.create(req.body)
  try {
    await entry.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/entries`);
}