const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');


router.get('/getallitems', async (req, res)=> {
    try {
        const items = await Item.find({});
        res.send(items);
    }
    catch(err) {
        return res.status(400).json({message: err});
    }
});

module.exports = router;