const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');
const path = require('path');

module.exports = async (req, res, next) => {

    // console.log("req.body:"+req.body);
    // return res.send('search');
    let postData = '';
    req.on('data', chunk => {
        postData += chunk.toString();
    })
    // return res.send('search');
    console.log(req.body);
    return res.send(postData);
    req.on('end', () => {
        
        console.log('postData:'+postData);
        // console.log(typeof postData);

         
        // let dataString = JSON.parse(postData);

        return res.send('search');
        // return res.render('home/product-list.art');
    })
    
};