const mongoose = require('mongoose')

const housingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        //minLength: [6, "Too short! Title should be at least 6 characters !"]
    }, 
    type: {
        type: String,
        required: true,
        enum: { values:["Apartment", "Villa", "House"], message:'Type field can be only “Apartment”, “Villa” or “House” !'}
       // minLength: [6, "Too short! Keyword should be at least 6 characters !"]
    },
    year: {
        type: Number,
        required: true,
        min: 1850,
        max: 2021
        //maxLength: [15, "Too long! Location should be 15 characters !"]
    },
    city: {
        type: String,
        required: true,
        minLength: [4, "City should at least 4 characters !"],
        //maxLength: [10, "Date should be 10 characters !"]
    },
    imageUrl: {
        type: String,
        required: true,
        // match: /^https?:\/\//
        validate : {
            validator: function (value){
                return value.startsWith("http://") || value.startsWith("https://")
            },
            message: "Invalid URL!"
        }
    }, 
    description: {
        type: String,
        required: true,
        maxLength: [60, "Too long! Description max 60 characters !"]
    
    },
    prices: {
        type: Number,
        required: true,
        min: 0,
        max: 10
        //minLength: [8, "Too short! Keyword should be at least 6 characters !"]
    },
    rentedHome:[{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    
    // createdAt: {
    //     type: Date, default: Date.now
    // },
}, { timestamps: true })

const Housing = mongoose.model('Housing', housingSchema)
module.exports = Housing