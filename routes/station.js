var express = require('express');
var router = express.Router();


var controller = require('../controllers/station');
/* GET users listing. */
router.get('/api/station', controller.getStation);
router.get('/api/station/:id', controller.getById);
router.delete('/api/station/:id', controller.delete);
router.post('/api/station', controller.add);

module.exports = router;
