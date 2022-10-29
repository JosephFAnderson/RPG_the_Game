const { Monster } = require('../../models');
const router = require('express').Router();

router.get('/:id', async (req, res) => {
    try{        
        const monData = await Monster.findByPk(req.params.id);
        res.status(200).json(monData);
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;