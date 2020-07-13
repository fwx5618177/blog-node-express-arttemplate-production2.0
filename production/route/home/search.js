const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');
const path = require('path');

module.exports = async (req, res) => {

    // console.log("req.body:"+JSON.parse(req.body));
    const searchItem = req.body;
    return res.send(searchItem)
    // return res.send('search');
    let postData = '';
    req.on('data', chunk => {
        postData += chunk.toString();
    })
    // return res.send('search');

    req.on('end', () => {
        console.log(req.body);
        return res.send(postData);
        console.log('postData:'+postData);
        // console.log(typeof postData);

         
        // let dataString = JSON.parse(postData);

        return res.send('search');
        // return res.render('home/product-list.art');
    })
    
};