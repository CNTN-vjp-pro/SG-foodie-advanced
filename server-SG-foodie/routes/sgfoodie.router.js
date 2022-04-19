const express = require('express');
const router = express.Router();
const Policy = require('../models/Policy');
router.get('/', (req, res) => {
    res.send("Ok...")
})
router.get('/policies', (req, res) => {
    Policy.find({})
        .then(data => { res.json(data) })
        .catch(error => {
            res.json({ "Error:": error.message })
        })
})
module.exports = router;