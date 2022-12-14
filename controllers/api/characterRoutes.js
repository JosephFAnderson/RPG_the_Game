const router = require('express').Router();
const { Character, Weapon, Armor} = require('../../models');
const withAuth = require("../../utils/auth");


router.get('/:id', async (req, res) => {
    try{
        const characters = await Character.findByPk(req.params.id, {
            include: [Weapon, Armor]
        });
        res.status(200).json(characters);
    }catch (err) {
        res.status(500).json(err);
    }    
});

router.post('/', withAuth, async (req, res) => {    
    try {
        req.body.user_id = req.session.user_id;
        const newChar = await Character.create(
            req.body
        );

        res.status(200).json(newChar);
    }
    catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try{
        const charData = await Character.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(charData);
    }catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deleteChar = await Character.destroy({
            where: {
                id: req.params.id
            },
        });
        if (!deleteChar) {
            res.status(404).json({ message: 'No Character found' });
            return;
        }
        res.status(200).json(deleteChar);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router