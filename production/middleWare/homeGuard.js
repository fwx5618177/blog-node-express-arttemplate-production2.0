const guard = (req, res, next) => {
    if(!req.session.id) {
        return res.redirect('/home/');
    } else {
        
        return next();
    }
}

module.exports = guard;