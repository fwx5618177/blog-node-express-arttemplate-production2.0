const { User } = require('../../model/user');

module.exports = async (req, res) => {
    const deleId = req.query.id;

    await User.findOneAndDelete({_id: deleId});
    return res.redirect('/admin/user');

}