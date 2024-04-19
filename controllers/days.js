const Day = require('../models/day');


module.exports = {
    index
};

async function index(req, res) {
    const days = await Day.find({});
    res.render('days/index', { title: 'ADD YOUR ACCOMPLISHED DAY', days });
  }