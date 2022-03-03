const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
    // _id: {
    //     type: Number,
    //     unique: true
    // },
    row:{
        type: Number,
        unique: true
    },
    sensorId: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Sensor = mongoose.model("Sensor", sensorSchema)

module.exports = Sensor

