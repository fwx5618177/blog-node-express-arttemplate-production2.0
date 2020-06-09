// 引入mongoose第三方模块
const mongoose = require('mongoose');
const config = require('config');
// 取掉控制台的错误提示
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

var url = `mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}?authSource=admin`;
// var url2 = 'mongodb://fwx:fwx5618177@localhost/blog'
// console.log(url);

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    // console.log(err);
    if(err) console.log(err);
})
.then(() => console.log('数据库连接成功'))
.catch(() => console.log('数据库连接失败'))


// 连接数据库
// mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, {useNewUrlParser: true, useUnifiedTopology: true })
    // .then(() => console.log('数据库连接成功'))
    // .catch(() => console.log('数据库连接失败'))

// mongoose.connect(`mongodb://fwx:fwx5618177@localhost:27017/blog`, {useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('数据库连接成功'))
//     .catch(() => console.log('数据库连接失败'))

// mongoose.connect('mongodb://fwx:fwx5618177@localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('数据库连接成功'))
// .catch(() => console.log('数据库连接失败'))

// mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('数据库连接成功'))
//     .catch(() => console.log('数据库连接失败'))