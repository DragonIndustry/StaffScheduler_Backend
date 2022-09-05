const express = require('express');
const { builtinModules } = require('module');
const router = express.Router();
const path = require('path');
const EventModel = require('../../models/Event');
const StaffModel = require('../../models/Staff');


// @route
// @desc    post a new event
router.post("/", async (req, res) => {
    const event = req.body;
    const newEvent = new EventModel(event);
    await newEvent.save();
    res.json(event);
});


// @route
// @desc    get a staffs calendar
router.get("/:staffID", (req, res) => {
    EventModel.find({ staff: req.params.staffID}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;