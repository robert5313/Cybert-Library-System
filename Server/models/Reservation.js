// Initialize Mongoose
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    reservedAt: {
        type: Date,
        required: true
    },
    expectedReturnDate: {
        type: Date,
        required: true
    },
    actualReturnDate: {
        type: Date
    }
}, {
    timestamps: true
});


reservationSchema.virtual('fine').get(function() {
    if (this.actualReturnDate && this.actualReturnDate > this.expectedReturnDate) {
        const daysLate = Math.floor((this.actualReturnDate - this.expectedReturnDate) / (1000 * 60 * 60 * 24));
        return daysLate * 0.5; // Fine of $0.50 per day
    }
    return 0;
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;

