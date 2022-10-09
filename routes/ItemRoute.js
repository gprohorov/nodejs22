import express from 'express';
import items from '../data/items.json';
import _ from 'lodash';

const router = express.Router();

let itemsArray = items;

router.get('/', (req, res) =>{
    //
    // middleware
    //
    res.json(itemsArray);
});

router.post('/', (req, res) => {
    itemsArray.push(req.body);
    res.status(200).send("OK");
})

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

