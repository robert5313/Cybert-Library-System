const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    
    publisher: {
        type: String,
        required: true
    },
    book: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    borrowedAt: { 
        type: Date 
    },
    returned_date: {
        type: Date,
        required: false
    },
    availability: { 
        type: Boolean, 
        default: true 
    },
    borrowedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    });

module.exports = mongoose.model('Book', bookSchema);