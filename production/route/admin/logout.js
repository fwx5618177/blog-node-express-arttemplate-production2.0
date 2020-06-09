module.exports = (req, res) => {
    // del session
    req.session.destroy(function () {
        // del  cookie
        res.clearCookie('connect.sid');
        // 重定向到用户登陆页面
        res.redirect('/admin/login');
        // 清除模板中的用户信息
        req.app.locals.userInfo = null;
    });
};
