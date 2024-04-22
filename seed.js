require('dotenv').config();
require('./config/database');

const Exercise = require('./models/exercise');


const data = require('./data');
// await needs an async function - use an async IIFE!
(async function() {
    let results = await Exercise.deleteMany({});
    // results will be whatever the promise
    // returned by the deleteMany method resolves to
    console.log(results);
    
    // Lastly, use process.exit() to "cleanly" shut down the Node program
    process.exit();
  })();