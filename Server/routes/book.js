const express = require('express');
const Book = require('../models/book');
const Router = require('express');

const router = Router();
// Get a list of all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        console.log("start books");
        console.log(books);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific book by id
router.get('/:bookId', async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new book
router.post('/', async (req, res) => {
    const newBook = new Book(req.body);
    console.log("newBook");
    console.log(newBook);
    try {
        const savedBook = await newBook.save();
        res.json(savedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


//Update a book
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.json(updatedBook);
        console.log(updatedBook);
    } catch (error) {
        res.json({ message: error });
    }
});




//Delete a book
router.delete('/:id', async (req, res) => {
    try {
        const removedBook = await Book.remove({ _id: req.params.id });
        res.json(removedBook);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;