const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');

router.post('/exercises', exercisesCtrl.create);