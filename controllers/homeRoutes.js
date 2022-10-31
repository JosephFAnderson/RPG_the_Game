const router = require('express').Router();
const {User, Character, Armor, Weapon, Dead, Monster} = require('../models');
const withAuth = require('../utils/auth');
const accountAuth = require('../utils/accountAuth');


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

router.get('/town/:id', withAuth, accountAuth, async (req, res) => {
    try{
        const charData = await Character.findByPk(req.params.id, {include: [Armor, Weapon]}).catch((err) => res.json(err));
        const character = charData.get({plain: true});        
        res.render('town', {character});
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/shop/:id', withAuth, accountAuth, async (req, res) => {
    try{
        const charData = await Character.findByPk(req.params.id);
        const character = charData.get({ plain: true });
        

        const wepData = await Weapon.findAll();
        const weapons = wepData.map(weap => weap.get({plain: true}));
        weapons.shift();

        const armData = await Armor.findAll();
        const armors = armData.map(arm => arm.get({plain: true}));
        armors.shift();
        
        res.render('shop', {character, weapons, armors});
    }catch (err) {
        res.status(500).json(err);
    }    
});

router.get('/graveyard', withAuth,  async (req, res) => {
    try{
        const deadsData = await Dead.findAll({
            include: Monster,
            where: { user_id: req.session.user_id }});
        const Deads = deadsData.map(fallen => fallen.get({plain: true}));
        res.render('graveyard', { Deads })
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/adventure/:id', withAuth, accountAuth, async (req, res) => {
    try{
        res.render('adventure', {character_id: req.params.id});
    }catch (err) {
        res.status(500).json(err);
    }    
});

router.get('/combatScreen/', withAuth, accountAuth, async (req,res) => {    
    try{
        const charData = await Character.findByPk(req.query.id);
        const character = charData.get({plain:true});
        const monData = await Monster.findAll();
        const monsters = monData.map(monster => monster.get({ plain: true }));
        const monsterPossible = monsters.filter(mon => mon.level == req.query.monId*2 || mon.level == req.query.monId*2-1);
        const monster = monsterPossible[Math.floor(Math.random() * monsterPossible.length)];

        res.render('combatScreen', {character, monster});
    }catch(err){
        res.status(500).json(err);
}    
});

router.get('/arena/:id', withAuth, accountAuth, async (req, res) => {
    try{
        const charData = await Character.findAll()
        const characters = charData.map(character => character.get({ plain: true }));
        const opponents = characters.filter(character => character.user_id !== req.session.user_id);
        res.render('arena', { opponents, character_id: req.params.id });
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/traveling', withAuth, accountAuth, async (req, res) => {
    try{
        res.render('traveling', {character_id: req.query.id, monster_id: req.query.monId});
    }catch (err) {
        res.status(500).json(err);
    }   
});

router.get('/arenaCombat', withAuth, accountAuth, async (req,res) => {    
    try{
        const charData = await Character.findByPk(req.query.id);
        const character = charData.get({plain:true});
        const oppData = await Character.findByPk(req.query.opp_id);
        const opponent = oppData.get({ plain: true });        

        res.render('arenaCombat', {character, opponent});
    }catch(err){
        res.status(500).json(err);
}    
});
module.exports = router;