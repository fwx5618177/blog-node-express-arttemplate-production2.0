const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    // res.send('欢迎来到博客展示页面')

    let page = req.query.page || 1;


    let pagesize = 10;
    let count = await Article.countDocuments();
    let total = Math.ceil(count / pagesize);


    // let results = await pagination(Article).find().page(page).size(pagesize).display(total).populate('author').exec();
    let result = await pagination(Article).find().page(page).size(pagesize).display(total).populate('author').exec();
    // let result = await pagination(Article).page(1).size(4).display(5).find().populate('author').exec();
    // const results = JSON.parse(result)
    // res.send(result)
    // return;
    try {
        return res.render('home/default.art', {
            result: result
        });
    }catch(ex) {
        res.send(ex.message);
    }
}