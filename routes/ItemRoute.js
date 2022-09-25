import express from 'express';
import items from '../data/items.json';
import _ from 'lodash';

const router = express.Router();


router.get('/', (req, res) =>{
    res.json(items);
});

router.get('/:id', (req, res) =>{
    const id = req.params.id;
    const item = _.find(items, item => item.id === id);
    if (item) {
        res.json(item);
    }else {
        res.send('NOT FOUND');
    }
});

module.exports = router;
