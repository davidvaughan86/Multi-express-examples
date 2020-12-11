const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');


// app.use() handles the first part of the path (the "mount point").
// This router looks at the rest of the path.

router.get('/', productController.list);
router.get('/page/:page', productController.page)
router.get('/:id', productController.detail);

module.exports = router;
