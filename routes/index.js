var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());


var sendmail = require('../controller/sendmailcontroller');

/* GET home page. */
router.post('/sendmail', sendmail.insert);

router.post('/sendmailinfo', sendmail.insert_info);

router.get('/getmail', sendmail.get_data);

router.get('/getinfo', sendmail.get_data_info);

router.get('/getmailinfo', sendmail.get_data_info);

router.get('/', function (req, res) {
    res.send("hello");
});

module.exports = router;
