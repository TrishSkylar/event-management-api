const { Router } = require('express');
const newMessage = require('./newMessage');

const router = Router();

router.post('/', newMessage);

module.exports = router;