// 将评论集合构造函数进行导入
const { Comment } = require('../../model/comment');

module.exports = async (req, res) => {
    // 接收客户端传递过来的请求参数
    const { content, uid, aid } = req.body;

    // 将评论信息存储到评论集合中
    await Comment.create({
        content: content,
        uid: uid,
        aid: aid,
        time: new Date()
    });
    // res.send(aid);
    return res.redirect(`/home/article?id=${aid}`);
}