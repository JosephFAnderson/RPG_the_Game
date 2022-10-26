const router = require('express').Router();
const {User, Character} = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', async (req, res) => {
    try{
        res.render('login');
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;