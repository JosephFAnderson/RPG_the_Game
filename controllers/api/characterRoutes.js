const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
    req.body.user_id = req.session.user_id;
    try {
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

    Character.update(
        req.body,
        {
            where: { id: req.params.id, }
        },
    )
        .then((updatedCharacter) => {
            res.json(updatedCharacter)
        })
        .catch((err) => res.json(err))
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