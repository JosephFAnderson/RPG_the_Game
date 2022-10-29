const router = require('express').Router();
const userRoutes = require('./userRoutes');
const charRoutes = require('./characterRoutes');
const monRoutes = require('./monsterRoutes');
const deadRoutes = require('./deadRoutes');

router.use('/user', userRoutes);
router.use('/character',charRoutes);
router.use('/monster', monRoutes);
router.use('/dead', deadRoutes);

module.exports = router;