const { User } = require('../../model/user');
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
    const { username, email, role, state, password } = req.body;
    const id = req.query.id;

    let user = await User.findOne({_id: id});

    const isValid = await bcrypt.compare(password, user.password);

    if(isValid) {

        await User.updateOne({_id: id}, {
           username: username,
           email: email,
           role: role,
           state: state 
        });

        return res.redirect('/admin/user');
        
    }else {
        let obj = {path: '/admin/user-edit', message: '密码对比失败，不能进行用户信息的修改', id: id}
        return next(JSON.stringify(obj));
    }

}