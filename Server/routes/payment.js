const express = require('express');
const Payment = require('../models/payment');
const Router = require('express');

const router = Router();

// Get a list of all payments
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find();
        console.log("start payments");
        console.log(payments);
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific payment by id
router.get('/:paymentId', async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.paymentId);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new payment
router.post('/', async (req, res) => {
    const newPayment = new Payment(req.body);
    console.log("newPayment");
    console.log(newPayment);
    try {
        const savedPayment = await newPayment.save();
        res.json(savedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Update a payment
router.put('/:id', async (req, res) => {
    try {
        const updatedPayment = await Payment.update
        (
            { _id: req.params.id },
            { $set: req.body }
        );
        res.json(updatedPayment);
        console.log(updatedPayment);
    } catch (error) {
        res.json({ message: error });
    }
}
);

//Delete a payment
router.delete('/:id', async (req, res) => {
    try {
        const removedPayment = await Payment.remove({ _id: req.params.id });
        res.json(removedPayment);
    } catch (error) {
        res.json({ message: error });
    }
});


module.exports = router;