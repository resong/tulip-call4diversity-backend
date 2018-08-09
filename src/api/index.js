const express = require("express");

const {healthRouter} = require('../routes/health/health.router');
const {conferenceRouter} = require('../routes/conference/conference.router');

const router = express.Router();
router.use("/health", healthRouter);
router.use("/conference", conferenceRouter);

module.exports = router;
