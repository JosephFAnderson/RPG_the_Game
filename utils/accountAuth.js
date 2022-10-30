const { Character } = require('../models');

const accountAuth = async (req, res, next) => {
    try{
        const id = req.params.id || req.query.id;
        const charData = await Character.findByPk(id);
        const char = charData.get({plain: true});
        if(char.user_id != req.session.user_id){
            res.redirect('/characterLanding');
        }else{
            next();
        }        
    }catch (err) {
        res.status(500).json();
    }
}

module.exports = accountAuth;