const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employees');

router.get('/', employeeController.list);
router.get('/:id', employeeController.detail);

module.exports = router;
