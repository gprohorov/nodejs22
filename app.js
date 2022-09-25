import express from 'express';
import items from './data/items.json';
import _ from 'lodash';
import ItemRoute from './routes/ItemRoute';
// import morgan from 'morgan';

const BASE_ITEMS_URL = '/api/v1/items';

const server = express();
const morgan = require('morgan');
morgan.token('host', function(req, res) {
    return req.hostname;
});
server.use(morgan(':method :host :status :param[id] :res[content-length] - :response-time ms'));

morgan.token('param', function(req, res, param) {
    return req.params[param];
});

server.use(BASE_ITEMS_URL, ItemRoute);
// server.use(morgan('tiny'));


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
