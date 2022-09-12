import express from 'express';
import  items from './data/items.json';
import _ from 'lodash';

const BASE_ITEMS_URL = '/api/v1/items';

const server = express();
const PORT = 3000;
const message = "Hello, ES6 !!!111111111111!!!";
console.log("hello node.js");
console.log(message);

server.get('/', (req, res) =>{
    console.log(" Request to root");
    res.send('Hello, browser');
});

server.get(BASE_ITEMS_URL+'/:id', (req, res) =>{
    const id = req.params.id;
    const item = _.find(items, item => item.id === id);
    if (item) {
        res.json(item);
    }else {
        res.send("NOT FOUND");
    }

})

server.listen(3000, () => {
    console.log('Server is listening on port ' + PORT);
});

server.get(BASE_ITEMS_URL, (req, res) =>{
    res.json(items);
})
