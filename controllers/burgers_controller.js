const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/index', (req, res) => {
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

router.post('/index', (req, res) => {
    burger.insertOne(req.body.burgerInput);
    res.redirect('/index');
});

router.put('/index:id', (req, res) => {
    burger.updateOne(req.params.id);
    res.redirect('/index');
});

module.exports = router;



