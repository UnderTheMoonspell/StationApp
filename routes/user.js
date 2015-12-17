var express = require('express');
var router = express.Router();


var controller = require('../controllers/user');
/* GET users listing. */
router.get('/api/user', controller.getAll);
router.get('/api/user/:id', controller.getById);
router.delete('/api/user/:id', controller.delete);
router.post('/api/user', controller.add);

module.exports = router;
