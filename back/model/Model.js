const mongoose = require("mongoose")

const Anime = new mongoose.Schema({
    manga:{
        type: String
    },

    creator:{
        type: String
    },
    release:{
        type: Date
    }
})

module.exports = mongoose.model('Anime', Anime)