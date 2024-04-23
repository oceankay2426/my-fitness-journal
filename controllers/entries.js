const Entry = require('../models/entry');
const exercise = require('../models/exercise');
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
  const entries = await Entry.find({date: {$gte: startDate, $lte: endDate}});
  res.render('entries/index', { title: 'MONTHLY LOG', entries, year, month, monthNames });
};

async function create(req, res) {
  const entry = await Entry.findById(req.params.id);
  //We can push (or unshift) subdocs into Mongoose arrays
  entry. exercise.splice(req.body);
  try {
    // Save any changes made to the entry doc
    await entry.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/entries${Entry._id}`);
}
async function update(req, res) {
  try {
    const updatedEntry = await Entry.findOneAndUpdate(
      {_id: req.params.id, userRecommending: req.user._id},
      // update object with updated properties
      req.body,
      // options object {new: true} returns updated doc
      {new: true}
    );
    return res.redirect(`/entries/${updatedEntry._id}`);
  } catch (e) {
    console.log(e.message);
    return res.redirect('/entries');
  }
}