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

router.get('/sign_up', async (req, res) => {
    try{
        res.render('sign_up');
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/characterlanding', withAuth, async (req, res) => {
    try{
        const charData = await Character.findAll({where: { user_id: req.session.user_id }});
        const characters = charData.map(character => character.get({plain: true}));
        res.render('characterLanding', { characters })
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;