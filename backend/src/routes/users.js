'use strict';

const express = require('express');
const router = express.Router();

// Example user routes

// Get all users
router.get('/', (req, res) => {
    res.send({ message: 'Get all users route' });
});

// Get a user by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send({ message: `Get user with ID ${id}` });
});

// Create a new user
router.post('/', (req, res) => {
    res.send({ message: 'Create a new user route' });
});

// Update a user by ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send({ message: `Update user with ID ${id}` });
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send({ message: `Delete user with ID ${id}` });
});

module.exports = router;
