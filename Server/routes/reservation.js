const Router = require('express');
const Reservation = require('../models/Reservation');

const router = Router();

// Get a list of all reservations
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        console.log("start reservations");
        console.log(reservations);
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: `Error fetching reservations: ${error.message}` });
    }
});

// Get a specific reservation by id
router.get('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: `Error fetching reservation: ${error.message}` });
    }
});

// Create a new reservation
router.post('/', async (req, res) => {
    const newReservation = new Reservation(req.body);
    console.log("newReservation");
    console.log(newReservation);
    try {
        const savedReservation = await newReservation.save();
        res.json(savedReservation);
    } catch (error) {
        res.status(400).json({ message: `Error creating reservation: ${error.message}` });
    }
});


// Update a reservation
router.put('/:id', async (req, res) => {
    try {
        const updatedReservation = await Reservation.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.json(updatedReservation);
        console.log(updatedReservation);
    } catch (error) {
        res.status(500).json({ message: `Error updating reservation: ${error.message}` });
    }
});

// Delete a reservation
router.delete('/:id', async (req, res) => {
    try {
        const removedReservation = await Reservation.remove({ _id: req.params.id });
        res.json(removedReservation);
    } catch (error) {
        res.status(500).json({ message: `Error deleting reservation: ${error.message}` });
    }
});

module.exports = router;