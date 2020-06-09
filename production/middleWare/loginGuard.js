const guard = (req, res, next) => {
    if(req.url != '/login' && !req.session.username) {
        return res.redirect('/admin/login');
    } else {
        if(req.session.role == 'normal') {
            return res.redirect('/home/');
        }
        
        return next();
    }
}

module.exports = guard;