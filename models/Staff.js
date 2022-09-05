const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, {collection: 'staff'});

StaffSchema.set('collection', 'staff');

const StaffModel = mongoose.model("staff", StaffSchema);
module.exports = StaffModel;