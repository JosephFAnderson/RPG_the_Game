const router = require('express').Router();
const {User, Character, Armor, Weapon, Dead} = require('../models');
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

router.get('/characterCreation', withAuth, async (req, res) => {
    try{
        res.render('characterCreation')
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/town/:id', withAuth, async (req, res) => {
    try{
        const charData = await Character.findByPk(1).catch((err) => res.json(err));
        const character = charData.get({plain: true});
        req.session.save( () => {
            req.session.character_id = character.id;
            console.log(req.session.character_id)
        });
        res.render('town', {character});
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/shop/:id', withAuth, async (req, res) => {
    try{
        const charData = await Character.findByPk(req.params.id);
        const character = charData.get({ plain: true });
        

        const wepData = await Weapon.findAll();
        const weapons = wepData.map(weap => weap.get({plain: true}));

        const armData = await Armor.findAll();
        const armors = armData.map(arm => arm.get({plain: true}));
        
        res.render('shop', {character, weapons, armors});
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }    
});

router.get('/graveyard', withAuth, async (req, res) => {
    try{
        const deadsData = await Dead.findAll({where: { user_id: req.session.user_id }});
        const Deads = deadsData.map(fallen => fallen.get({plain: true}));
        console.log(Deads);
        res.render('graveyard', { Deads })
    }catch (err) {
        res.status(500).json(err);
    }
});

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;