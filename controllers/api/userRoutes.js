const router = require('express').Router();
const {User} = require('../../models');


router.post('/sign_up', async (req, res) => {
    try {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.logged_in = true;
  
        res.json(newUser);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({where: {username: req.body.username}});
        if(!userData){
            res.status(400).json("Invalid username or password");
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json("Invalid username or password");
            return;
        }

        req.session.save( () => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({username: userData.username, message:"You are logged in"});
        });
    }catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;