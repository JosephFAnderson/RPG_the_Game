const router = require('express').Router();
const { Dead } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/',  async (req, res) => {
    try{
        const deadData = await Dead.create({
            name: req.body.name,
            level: req.body.level,
            battle_count: req.body.battles_won,
            image_url: req.body.image_url,
            monster_id: req.body.monster_id,
            user_id: req.body.user_id
        });

        res.status(200).json(deadData);
    }catch (err) {
        res.status(500).json(err);
    }    
})

module.exports = router;