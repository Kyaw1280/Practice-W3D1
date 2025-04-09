const fruits = require('../fruits.json')

class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    } 

        static showAll() {
            return fruit.map
        }
}

const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
   
if (fruit === undefined) {
    res.status(404).send('The fruit does not exist.')
} else {
    res.status(200).send(fruit)
}