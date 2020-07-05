const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    // return res.send('欢迎来到博客展示页面')
    // let page = req.query.page || 1;

    // let pagesize = 10;
    // let count = await Article.countDocuments();
    // let total = Math.ceil(count / pagesize);

    // 文章总和
    // let results = await pagination(Article).find().page(page).size(pagesize).display(total).populate('author').exec();
    // let result = await pagination(Article).find().page(page).size(pagesize).display(total).populate('author').exec();
    // let result = await pagination(Article).page(1).size(4).display(5).find().populate('author').exec();
    // const results = JSON.parse(result)
    // return res.send(result.records[0].sorts)
    // 种类
    let sortsArr = await Article.find({});
    let arr = [];
    sortsArr.forEach((item) => {
        arr.push(item.sorts);
    });

    let sorts = Array.from(new Set(arr));
    // return res.send(JSON.stringify(sorts));
    // return res.send(JSON.stringify(result));
    // return;

    let slips = await Article.find({"slip": {$ne: 'none'}});

    
    try {
        return res.render('home/default.art', {
            // sorts: sorts,
            // result: result

        });
    }catch(ex) {
        return res.send(ex.message);
    }
}