const mongoose = require('mongoose');

const ZipSchema = mongoose.Schema({
    zip: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    state_code: {
        type: String,
    },
    county: {
        type: String,
    },
    county_code: {
        type: Number,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    num_of_counties: {
        type: Number,
    },
    num_of_zips: {
        type: Number,
    }

});

module.exports = mongoose.model('zip', ZipSchema)