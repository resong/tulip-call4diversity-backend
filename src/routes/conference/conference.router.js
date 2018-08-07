const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const {getAllConferences, addNewConference} = require('../conference/conference.controller');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

router.get('', getAllConferences);

router.post('', urlEncodedParser, addNewConference);

module.exports = {
  conferenceRouter: router,
};
