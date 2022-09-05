const express = require('express');
const { builtinModules } = require('module');
const router = express.Router();
const path = require('path');
const StaffModel = require('../../models/Staff');


//  @route
//  @description gets all staff members
router.get("/", (req, res) => {
    StaffModel.find()
        .then(staff => res.json(staff))
        .catch(err => res.status(404).json({ nostaff: 'No Staff Found'}));
});


//  @route
//  @description gets a staff member by id
router.get("/:id", (req, res) => {
    StaffModel.findById(req.params.id)
        .then(staff => res.json(staff))
        .catch(err => res.status(404).json({ nostaff: 'No Staff Member under this ID'}));
});


//  @route
//  @description creates a new staff record
router.post('/', (req, res) => {
    StaffModel.create(req.body)
        .then(staff => res.json({ msg: 'Staff Member Created'}))
        .catch(err => res.status(400).json({ error: 'Unable to create staff member'}));
});

module.exports = router;