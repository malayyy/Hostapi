const express = require('express');
const router = express.Router();
const 
{getAllProducts,
getAllproductsTesting
}
= require('../controller/productcontroller')

router.get('/',getAllProducts)
router.get('/testing',getAllproductsTesting);

module.exports = router; 