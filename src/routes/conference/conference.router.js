const express = require('express');
const router = express.Router();
const {logger} = require('../../utils/logger');
const {db} = require('../../api/db');

router.get('', (req, res) => {
  let conferences = db.collection('conferences');
  let events = [];
  conferences.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      events = [...events, doc.data()];
    });
    return res.send(events);
  })
  .catch((err) => {
    logger.error(err);
  });
});

module.exports = {
  conferenceRouter: router
}
