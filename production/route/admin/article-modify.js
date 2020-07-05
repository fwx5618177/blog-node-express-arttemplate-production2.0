const { Article } = require('../../model/article');
// 引入第三方模块formidable
const formidable = require('formidable');
const { date } = require('joi');
const path = require('path');
const fs = require('fs');

module.exports = async (req, res, next) => {
    const id = req.query.id;
    // res.send(id);
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads')
     // 2.解析表单
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
    // res.send(files);
        const { title, author, content, sorts, price } = fields;
        let publishDate = fields.publishDate;
        const cover = files.cover.path.split('public')[1];
        const QRfile = files.QRcode.path.split('public')[1];

        if( !title || !sorts ) {
            
            // return res.redirect('/admin/article')
            let obj = {path: '/admin/article-edit', message: '内容未填写，不能进行用户信息的修改', id: id};
            return next(JSON.stringify(obj))
            
        }
        // console.log(id)
        if( !publishDate )  publishDate = new Date();
        // return res.send(publishDate);

        let article = await Article.findOne({_id: id});
        // return res.send(article.cover);
        const articlecover = article.cover;
        const articleQRfile = article.QRfile;

        let filedDir = path.join(__dirname, '../../public');

        let location = `${filedDir}${article.cover}`;
        let QRlocation = `${filedDir}${article.QRfile}`;
        let coverDefault = '\\uploads\\default\\default.jpg';
        let QRDefault = '\\uploads\\default\\QR-default.jpg';
        // return res.send(article.cover + coverDefault);
        // return res.send('articlecover',articlecover);
        let fix = files.cover.path.split('.')[1];
        let QRfix = files.QRcode.path.split('.')[1];
        let coverlocation = `${filedDir}${cover}`;
        let QRfilelocation = `${filedDir}${QRfile}`;
 

            if(articlecover !== cover){
                if(articlecover !== coverDefault){
    
                      if(!fix || !cover){
                        fs.unlink(`${coverlocation}`,(err) => {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log('delete ok');
                            }
                          });
                    }else{
                        fs.unlink(`${location}`,(err) => {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log('delete ok');
                            }
                          });

                          article.cover = cover;
                    }


                }else{
                    if(!fix || !cover){
                        fs.unlink(`${coverlocation}`,(err) => {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log('delete ok');
                            }

                          });
                        //   return res.send('fix:'+fix+'cover'+cover);
                    }else{
                        // return res.send(article.cover+cover);
                          article.cover = cover;
                    }
                }

            }

            if(articleQRfile !== QRfile){
                if(articleQRfile !== QRDefault){

                    if(!QRfix || !QRfile){
                        fs.unlink(`${QRfilelocation}`,(err) => {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log('delete ok');
                            }
                          });
                    }else{
                        fs.unlink(`${QRlocation}`,(err) => {
                            if (err) {
                            console.log(err);
                            } else {
                            console.log('delete ok');
                            }
                        });
                        article.QRfile = QRfile;
                    }

                }else {
                    if(!QRfix || !QRfile){
                        fs.unlink(`${QRfilelocation}`,(err) => {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log('delete ok');
                            }
                          });

                    }else{
                        // return res.send(article.QRfile+QRfile);
                        article.QRfile = QRfile;
                    }
                }
            }


 

            await Article.updateOne({_id: id}, {
                title: title,
                author: author,
                publishDate: publishDate,
                content: content,
                sorts: sorts,
                price: price,
                cover: article.cover,
                QRfile: article.QRfile,
                slip: fields.slip,
                insgram: fields.insgra
            });
        



        // res.send(article);
        // await Article.updateOne({_id: id}, {
        //     title: title,
        //     author: author,
        //     publishDate: publishDate,
        //     content: content,
        //     sorts: sorts,
        //     price: price,
        // });

        // res.send(articles);
        // let articles = await Article.findOne({_id: id});
        // res.send(articles);
        return res.redirect('/admin/article');
    })

}