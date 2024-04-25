const entry = require('../models/entry');
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
  create,
  delete: deleteEntry,
  edit,
  update
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
  const entries = await Entry.find({ date: { $gte: startDate, $lte: endDate }, user: req.user._id }).populate("exercise");
  const exercises = await Exercise.find({});
  res.render('entries/index', { title: 'MONTHLY LOG', entries, year, month, monthNames, exercises });
}

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

async function deleteEntry(req, res) {
  await Entry.findOneAndDelete({ _id: req.params.cookies, user: req.user._id });
  res.redirect('/entries');
}

async function edit(req, res) {
  const entry = await Entry.findById({_id: req.params.candy, user: req.user._id}).populate('exercise');
  const exercises = await Exercise.find({});
  res.render('entries/edit', { title: 'Edit Day', entry, exercises })
}

async function update(req, res) {
  try {
    const updatedEntry = await Entry.findOneAndUpdate(
      {_id: req.params.candy, user: req.user._id},
      req.body,
    
      {new: true}
    );
  } catch (e) {
    console.log(e.message);
  }
  return res.redirect('/entries');
}