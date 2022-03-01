import {v4 as uuidv4} from 'uuid';

let fruits = []

export const getFruits = (req, res) =>{
    res.send(fruits);    
}

export const createFruit = (req, res) =>{
    const fruit = req.body;
    const fruitWithId = fruits.push({...fruit, id: uuidv4()});
    fruits.push(fruitWithId);
    res.send(`${fruit.fruit} added`);
}

export const getFruit = (req, res) =>{
    const {id} = req.params;
    const foundFruit = fruits.find((fruit) => fruit.id === id);
    res.send(foundFruit);
}

export const deleteFruit = (req, res) =>{
    const {id} = req.params;
    fruits = fruits.filter((fruit) => fruit.id !== id);
    res.send(`${id} is deleted`);
}

export const updateFruit =  (req, res) =>{
    const {id} = req.params;
    const { fruit, season, price } = req.body;
    const foundFruit = fruits.find((fruit) => fruit.id === id);
    if(fruit) foundFruit.fruit = fruit;
    if(season) foundFruit.season = season;
    if(price) foundFruit.price = price;
    res.send('Fruit was updated');
}