const withAuth = (res, req, next) => {
    if(!req.session.logged_in){
        res.redirect('/login');
    }else{
        next();
    }
};

module.exports = withAuth;