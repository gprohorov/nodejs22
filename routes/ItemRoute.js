import express from 'express';
import items from '../data/items.json';
import _ from 'lodash';
import mongoose from "mongoose";

const router = express.Router();

const DB_URL = `mongodb://localhost:27017/nodejs22`;
const  DB_USER = '';
const  DB_PASSWORD = '';

let itemsArray = items;

mongoose.connect(DB_URL);
const db = mongoose.connection;
db.once('open', () =>{
    console.log('connection established');
} );

const ItemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String
});

const ItemModel = mongoose.model('Item', ItemSchema);

router.get('/', (req, res) =>{
    //
    // middleware
    //
    res.json(itemsArray);
});

router.post('/', (req, res) => {
 /*
    itemsArray.push(req.body);
    res.status(200).send("OK");
    */
  const id = mongoose.Types.ObjectId();
  const itemToPersist = Object.assign({
      _id: id
      }, req.body
  );
  const item = new ItemModel(itemToPersist);
  item.save(err =>{
     //if(err) res.status(500).send(err);
     if(err) {
         res.status(500).send(err);
         return handleError(err);
     }
       res.json(item);
  });
});

router.get('/:id', (req, res) =>{
    const id = req.params.id;
    const item = _.find(items, item => item.id === id);
    if (item) {
        res.json(item);
    }else {
        console.log('not found');
        res.send('NOT FOUND');
    }
});

module.exports = router;
/*
  -  50 points  -
  1. 4 classes
  2. Architecture (UML -diagram)
  3.  A class must have crud methods (api controller, service, repository, DB)
  4.  Fill the DB  -  at least 10 records for each . Use mockaroo for example
  5. Postman/Talend requests (5 for each)
 */

/*
*  1. Swagger - 1-3 points for each table + exceptions   5-15 points
* 2. Front-end - crud 5 points for a table  -  20 points
* 3. search - 2, sort - 2, paging - 2 .  6 * 4 = 24
* 4.  Logging - 5 points
* 5.  Testing - 10 points for a model   ????????
* 6. Complex request (group by) - 2 points for each
* 7. styles -  10 max
* 8. Individuals -  ???
*
*
*
* */

