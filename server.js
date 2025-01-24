const express = require('express');
const app = express();
const port = 3000;

// 设置静态文件目录
app.use(express.static('public'));

// 模拟词汇数据库
const vocabList = [
    { word: "Bonjour", meaning: "你好" },
    { word: "Merci", meaning: "谢谢" },
    { word: "Au revoir", meaning: "再见" },
    { word: "Oui", meaning: "是" },
    { word: "Non", meaning: "不" },
    { word: "S'il vous plaît", meaning: "请" },
    { word: "Excusez-moi", meaning: "打扰一下" },
    { word: "Je t'aime", meaning: "我爱你" },
    { word: "Bienvenue", meaning: "欢迎" },
    { word: "Comment ça va?", meaning: "你好吗？" }
];

// 获取今日词汇的 API
app.get('/api/daily-vocab', (req, res) => {
    const shuffled = vocabList.sort(() => 0.5 - Math.random());
    const dailyVocab = shuffled.slice(0, 3);
    res.json(dailyVocab);
});

// 首页路由
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
}); 