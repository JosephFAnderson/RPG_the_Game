const router = require('express').Router();
const {User, Character} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async(req, res) => {
    try{
        res.render('home');
    }catch (err) {
        res.status(500).json(err);
    }
});
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

router.get('/town/:id', withAuth, async (req, res) => {
    try{
        const charData = await Character.findByPk(1).catch((err) => res.json(err));
        const character = charData.get({plain: true});
        req.session.save( () => {
            req.session.character_id = charData.id;
        });
        console.log(character);
        res.render('town', {character});
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;