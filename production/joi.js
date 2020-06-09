// 引入joi
const Joi = require('joi');

// 定义对象的验证规则
const schema = {
    username: Joi.string().min(2).max(5).error(new Error('username属性没有通过验证')),
    birth: Joi.number().min(1900).max(2020).required()
};

async function run () {
    try {
        await Joi.validate({username: 'ab', birth: 1800}, schema);
    } catch (ex) {
        console.log(ex.message);
        return;
    }
    console.log('验证通过')
}

run();