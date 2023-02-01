const express = require('express')
const Model = require('../model/Model')

//display
exports.displayData = async(req, res) => {
    try{
        const posts = await Model.find()
        res.json(posts)
    }
    catch (err){
        message: err
    }
}

//save
exports.saveData = async(req, res) => {

    const data = new Model({
        manga: req.body.manga,
        creator: req.body.creator,
        release: req.body.release
        // stars, title, review, give...
    })

    try{
        const saveData = await data.save()
        res.json(saveData)
    }
    catch (err){
        message: err
    }
}

// update
exports.updateData = async (req, res) => {
    try{
    const data = await Model.updateOne(
        {_id: req.params.postId},
        {$set: {
                manga: req.body.manga,
                creator: req.body.creator,
                release: req.body.release
            }
        }
    );

    res.json(data)
    
    }
    catch (err){
        message:err
    }
}
// delete
exports.deleteData = async (req, res) => {
try{
    const data = await Model.remove({_id: req.params.postId})
    res.json(data)
}
catch (err){
    message:err
}
}

// single
exports.singleData = async (req, res) => {
try {
    const data = await Model.findById(req.params.postId);
    res.json(data);
} catch (err) {
    mesaage:err
}
}