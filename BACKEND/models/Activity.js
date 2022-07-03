// assingn the mongoose package to the mongoose variable. to conncet we want it.
const mongoose = require("mongoose");


//assign the package to the variable schema
const Schema = mongoose.Schema;

//assign the schema to activityschema
const activitySchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email_address: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    kids: {
        type: Number,
    },
    hotel: {
        type: String,
        required: true
    },
    activity_name: {
        type: String,
        required: true
    },
    check_in_date: {
        type: String,
        required: true
    },
    check_out_date: {
        type:String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    }

})


//data comming from routes go through models to the database
//so we have a shema to do it.

//model is function that mongoose have
//those are the parameters as table name and schema name
const Activity = mongoose.model("Activity",activitySchema);

//export the module
//if it is not we could not use the activity model in the routes
//so we have to implement it
module.exports = Activity;