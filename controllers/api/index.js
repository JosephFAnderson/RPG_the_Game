const router = require('express').Router();
const userRoutes = require('./userRoutes');
const charRoutes = require('./characterRoutes');

router.use('/user', userRoutes);
router.use('/character',charRoutes);



module.exports = router;