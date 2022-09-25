import express from 'express';
import items from './data/items.json';
import _ from 'lodash';
import ItemRoute from './routes/ItemRoute';

const BASE_ITEMS_URL = '/api/v1/items';

const server = express();
server.use(BASE_ITEMS_URL, ItemRoute);


const PORT = 3000;
const message = "Hello, ES6 !!!11111111111!!!";
console.log("hello node.js");
console.log(message);

server.get('/', (req, res) =>{
    console.log(" Request to root");
    res.send('Hello, browser');
})


server.listen(3000, () => {
    console.log('Server is listening on port ' + PORT);
});
