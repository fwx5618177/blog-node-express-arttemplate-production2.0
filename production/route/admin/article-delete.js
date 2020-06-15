const { Article } = require('../../model/article');

module.exports = async (req, res) => {
    const deleId = req.query.id;
    // return res.send(deleId);

    await Article.findOneAndDelete({_id: deleId});
    return res.redirect('/admin/article');

}