// 导入bcrypt
const bcrypt = require('bcryptjs');

async function run () {
    const salt = await bcrypt.genSalt(10);
    const result = await bcrypt.hash('123456', salt);
    console.log(salt);
    console.log(result);
}

run();