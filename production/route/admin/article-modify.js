const { Article } = require('../../model/article');
// 引入第三方模块formidable
const formidable = require('formidable');


module.exports = async (req, res, next) => {
    const id = req.query.id;
    // res.send(id);
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
     // 2.解析表单
    form.parse(req, async (err, fields, files) => {
    // res.send(files);
        const { title, author, publishDate, content } = fields;
        const cover = files.cover;

        if( !content || !publishDate ) {
            
            // return res.redirect('/admin/article')
            let obj = {path: '/admin/article-edit', message: '失败，不能进行用户信息的修改', id: id};
            return next(JSON.stringify(obj))
            
        }
        // console.log(id)

        let article = await Article.findOne({_id: id});

        // res.send(article);
        await Article.updateOne({_id: id}, {
            title: title,
            author: author,
            publishDate: publishDate,
            content: content
        });

        // res.send(articles);
        // let articles = await Article.findOne({_id: id});
        // res.send(articles);
        return res.redirect('/admin/article');
    })

}