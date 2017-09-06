const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => { // eslint-disable-line
  res.render('index', { title: 'Music List Alpha' });
});

// const testJSON = [
//   {
//     name: 'John Smith',
//     username: 'CaptainCode'
//   },
//   {
//     name: 'Jane Doe',
//     username: 'JaneyCakes'
//   }
// ];

// router.get('/sendjson', (req, res, next) => { // eslint-disable-line
//   res.json(testJSON);
// });

module.exports = router;
