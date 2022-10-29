const router = require('express').Router();
const {User, Character, Armor, Weapon, Dead, Monster} = require('../models');
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
        const charData = await Character.findByPk(req.params.id, {include: [Armor, Weapon]}).catch((err) => res.json(err));
        const character = charData.get({plain: true});        
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

router.get('/adventure/:id', withAuth, async (req, res) => {
    try{
        res.render('adventure', {character_id: req.params.id});
    }catch (err) {
        res.status(500).json(err);
    }    
});
router.get('/combatScreen/', withAuth, async (req,res) => {    
    try{
        const charData = await Character.findByPk(req.query.id);
        const character = charData.get({plain:true});
        const monData = await Monster.findAll();
        const monsters = monData.map(monster => monster.get({ plain: true }));
        const monsterPossible = monsters.filter(mon => mon.id == req.query.monId || mon.id == req.query.monId-1);
        const monster = monsterPossible[Math.floor(Math.random() * monsterPossible.length)];

        res.render('combatScreen', {character, monster});
    }catch(err){
        res.status(500).json(err);
}    
});

router.get('/arena/:id', withAuth, async (req, res) => {
    try{
        const charData = await Character.findAll()
        const characters = charData.map(character => character.get({ plain: true }));
        const opponents = characters.filter(character => character.user_id !== req.session.user_id);
        res.render('arena', { opponents, character_id: req.params.id });
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/traveling', withAuth, async (req, res) => {
    try{
        res.render('traveling', {character_id: req.query.id, monster_id: req.query.monId});
    }catch (err) {
        res.status(500).json(err);
    }   
});

module.exports = router;