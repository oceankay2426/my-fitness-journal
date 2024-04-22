const Day = require('../models/day');


module.exports = {
    index,
    show
};

async function index(req, res) {
    const days = await Day.find({});
    res.render('days/index', { title: 'ADD YOUR ACCOMPLISHED DAY', days });
  }
  async function show(req, res) {
    const day = await Day.findById(req.params.id);
    // const = await Performer.find({ _id: { $nin: day.cast } }).sort('name');
    res.render('days/show', { title: 'Day Detail', day});
  }