const Exercise = require('../models/exrcise');
const Entry = require('../models/entry');

module.exports = {
  create
};

async function create(req, res) {

    res.render('/exercises', {title: 'JOURNAL'});
  };