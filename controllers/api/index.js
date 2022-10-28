const router = require('express').Router();
const userRoutes = require('./userRoutes');
const charRoutes = require('./characterRoutes');
const monRoutes = require('./monsterRoutes');

router.use('/user', userRoutes);
router.use('/character',charRoutes);
router.use('/monster', monRoutes);

module.exports = router;