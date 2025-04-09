const Fruit = require('../models/Fruits')

const index = (req, res) => {
    try {
        const fruits = Fruit.showAll()
        res.status(200).send(fruits)
    } catch (err) {
        res.status(500).send({ error:  'Server Error'})
    }
}

const show = (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = Fruit.show(name) 
        res.staus(200).show(fruit)
    } catch(err) {
        res.status(404).show({ error: err})
    }
} 

module.exports = { index, show }