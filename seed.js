require('dotenv').config();
require('./config/database');

const Exercise = require('./models/exercise');
const Entry = require('./models/entry');
const data = require('./data');

console.log(data);

(async function () {
    let results = await Exercise.deleteMany({});
    console.log(results);
    results = await Entry.deleteMany({});
    console.log(results);
    const exercises = await Exercise.create(data.exercises);
    console.log(exercises);





    process.exit();
})();