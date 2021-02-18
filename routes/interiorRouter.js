const express = require("express")
const interiorRouter = express.Router() 
const Interior = require("../models/interior.js")

interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, interiors) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(interiors)
    })
})
interiorRouter.post("/", (req, res, next) => {
    const newInterior = new Interior(req.body)
    newInterior.save((err, savedInteriors) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInteriors)
    })
})

module.exports = interiorRouter