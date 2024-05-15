const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cardNumber: {
        type: Number,
        unique: true,
        required: true
    },
    phone_number: {
        type: Number,
        unique: true,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Payment', paymentSchema);