const express = require('express')
const router = express.Router()

const Restaurant = require('../models/Restaurant')
const Policy = require('../models/Policy');
router.get('/', (req, res) => {
    res.send("It's seem ok")
})
router.get('/policies', (req, res) => {
    Policy.find({})
        .then(data => { res.json(data) })
        .catch(error => {
            res.json({ "Error:": error.message })
        })
})
router.get('/restaurants', async(req, res) => {
        try {
            let restaurants = await Restaurant.find();
            res.json(restaurants)
        } catch (err) {
            res.json({ message: err.message })
        }
    })
    //Get restaurant by Category
router.get('/restaurants/:category', async(req, res) => {
    try {
        let restaurant = await Restaurant.find({ category: req.params.category });
        res.json(restaurant)
    } catch (err) {
        res.json({ message: err.message })
    }
})
router.get('/restaurants/:id', async(req, res) => {
    try {
        let restaurant = await Restaurant.findById(req.params.id);
        res.json(restaurant)
    } catch (err) {
        res.json({ message: err.message })
    }
})

router.post('/restaurant', async(req, res) => {
    const restaurant = new Restaurant({
        name: req.body.name,
        short_description: req.body.short_description,
        description: req.body.description,
        image: req.body.image,
        menu: req.body.menu,
        best_dishes: req.body.best_dishes,
        link: req.body.link,
        category: req.body.category,
        address: req.body.address,
        map: req.body.map,
        time: req.body.time,
        price_range: req.body.price_range,
        special_diet: req.body.special_diet,
        discount: req.body.discount,
        cmt: req.body.cmt
    });
    // if (!mongoose.Types.ObjectId.isValid(req.body._id)) return false;
    try {
        const saveRestaurant = await restaurant.save();
        console.log(saveRestaurant);
        res.json({ message: "success" });
    } catch (err) {
        res.json({ message: err.message });
    }
})

router.patch('/restaurants/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        await Restaurant.findByIdAndUpdate(id, updatedData)

        res.json({ message: "success" })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


router.delete('/restaurants/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await Restaurant.findByIdAndDelete(id)

        res.json({ message: "success" })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})
module.exports = router