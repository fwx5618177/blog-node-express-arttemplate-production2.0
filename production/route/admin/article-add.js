// 引入第三方模块formidable
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article');

module.exports =  (req, res, next) => {
    //  res.send('ok');
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2.配置上传文件的存放位置
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads')
    // console.log(form.uploadDir);
    // 3.保留上传文件的后缀
    form.keepExtensions = true;
    // 4.解析表单
    form.parse(req, async (err, fields, files) => {

        // res.send(files);

        if(!fields.title || !fields.author || !fields.sorts) {
            return next(JSON.stringify({path: '/admin/article-edit', message: '标题和分类未填写'}))
        }
        
        const formData = await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content,
            sorts: fields.sorts
        })

        // console.log(formData);
        return res.redirect('/admin/article');
    })
}