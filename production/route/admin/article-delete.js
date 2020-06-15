const { Article } = require('../../model/article');
const path = require('path');
const fs = require('fs');

module.exports = async (req, res) => {
    const deleId = req.query.id;
    // return res.send(deleId);
    

    const article = await Article.findOne({_id: deleId});
    // console.log(article);

    // return res.send(article.cover);
    const cover = article.cover;
    const uploadDir = path.join(__dirname, '../../public');
    fs.unlink(`${uploadDir}/${cover}`,(err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('delete ok');
        }
      });

    await Article.findOneAndDelete({_id: deleId});
    return res.redirect('/admin/article');

}