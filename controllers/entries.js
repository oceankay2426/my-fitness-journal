const Entry = require('../models/entry');


module.exports = {
  index
};

async function index(req, res) {
  const entries = await Entry.find({});
  res.render('entries/index', { title: 'MONTHLY LOG', entries });
};