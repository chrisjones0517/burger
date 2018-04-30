const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(function (data) {
        let dataObject = {
            burgers: data
        };
                
        for (let i = 0; i < dataObject.burgers.length; i++) {
            dataObject.burgers[i].devoured = parseInt(dataObject.burgers[i].devoured);
        }

        res.render('index', dataObject);
    });
});

router.post('/', (req, res) => {
    burger.insertOne(req.body.burgerInput);
    res.redirect('/');
});

router.put('/:id', (req, res) => {
    burger.updateOne(req.params.id);
    res.redirect('/');
});

module.exports = router;



