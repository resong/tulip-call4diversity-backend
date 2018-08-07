const {logger} = require('../../utils/logger');
const {db} = require('../../api/db');

const getAllConferences = (req, res) => {
  let conferences = db.collection('conferences');
  let events = [];
  conferences.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      events = [...events, doc.data()];
    });
    return res.send(events);
  })
    .catch((err) => {
      logger.error(err.message);
    });
};

const addNewConference = (req, res) => {
  let newConference = Object.assign({}, req.body);
  let conferences = db.collection('conferences');
  conferences.add(newConference).then((doc) => {
    return res.send({documentID: doc.id, status: '201'});
  })
    .catch((err) => {
      logger.error(err.message);
    });
};

module.exports = {
  getAllConferences,
  addNewConference,
};
