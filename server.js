const mongoose = require("mongoose");
const express = require("express");
require('dotenv').config();

const Sensor = require("./models/sensor");
//const router = require('express').Router();
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const config = mongoose.connect(
    MONGO_URI,
    {},
    ()=> {
    console.log("DB connected")
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
    try{
        console.log("Home Page")
        const data = await Sensor.find()
        res.send(data)
    } catch (err) {
        console.log(err)
    } 
});

app.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const data = { ...req.body };
        const newSensor = new Sensor(data)
        const arr = await Sensor.find();
        newSensor.row = arr.length + 1;
        await newSensor.save()
        res.send("Data appended successfully")
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => {
    config;
    console.log(`Server Running at Port:${PORT}`)
})