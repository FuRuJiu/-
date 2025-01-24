// 词汇列表
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

// 获取今天的日期作为随机种子
const today = new Date().toDateString();
const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

// 随机选择3个词汇
function getDailyVocab() {
    const shuffled = vocabList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

// 渲染今日词汇
function renderDailyVocab() {
    const vocabListElement = document.getElementById('daily-vocab');
    if (!vocabListElement) {
        console.error('未找到 daily-vocab 元素');
        return;
    }

    const dailyVocab = getDailyVocab();
    vocabListElement.innerHTML = dailyVocab.map(vocab => `
        <li><strong>${vocab.word}</strong> - ${vocab.meaning}</li>
    `).join('');
}

// 删除语法练习题目库
const grammarQuestions = [
    // 删除所有题目
];

// 删除获取已做过的题目函数
function getCompletedQuestions() {
    // 删除函数内容
}

// 删除标记题目为已完成函数
function markQuestionAsCompleted(index) {
    // 删除函数内容
}

// 删除获取未做过的题目函数
function getUncompletedQuestions() {
    // 删除函数内容
}

// 删除随机选择未做过的题目函数
function getRandomUncompletedQuestions(count) {
    // 删除函数内容
}

// 删除渲染语法练习函数
function renderGrammarQuiz() {
    // 删除函数内容
}

// 删除显示解析函数
function showExplanation(index) {
    // 删除函数内容
}

// 删除检查语法练习答案函数
function checkGrammarQuiz() {
    // 删除函数内容
}

function createWordLink(word, meaning) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `word-detail.html?word=${encodeURIComponent(word)}&meaning=${encodeURIComponent(meaning)}`;
    a.textContent = `${word} - ${meaning}`;
    li.appendChild(a);
    return li;
}

document.addEventListener('DOMContentLoaded', () => {
    renderDailyVocab();

    const dailyVocab = document.getElementById('daily-vocab');
    const words = [
        { word: 'Bonjour', meaning: '你好' },
        { word: 'Merci', meaning: '谢谢' },
        { word: 'S\'il vous plaît', meaning: '请' },
        { word: 'Au revoir', meaning: '再见' },
        { word: 'Oui', meaning: '是' },
        { word: 'Non', meaning: '不' },
        { word: 'Excusez-moi', meaning: '打扰一下' },
        { word: 'Je ne comprends pas', meaning: '我不明白' },
        { word: 'Parlez-vous anglais?', meaning: '你会说英语吗？' },
        { word: 'Où est la gare?', meaning: '火车站在哪里？' }
    ];

    words.forEach(word => {
        dailyVocab.appendChild(createWordLink(word.word, word.meaning));
    });
});

// 优化词汇列表处理
const processVocabList = (list) => {
    return list.map(item => ({
        word: item.word.trim(),
        meaning: item.meaning.trim()
    }));
};

// 优化随机选择逻辑
const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// 优化渲染逻辑
const renderList = (containerId, items, createItem) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = items.map(item => createItem(item)).join('');
};

// 优化事件处理
const addEventListeners = (selector, event, handler) => {
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener(event, handler);
    });
};

// 暗黑模式切换逻辑
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// 初始化主题
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙';
}

// 切换主题
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// 搜索功能
document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.trim();
    const dictionary = document.getElementById('dictionary-select').value;

    if (!searchInput) {
        alert('请输入要搜索的内容');
        return;
    }

    // 根据选择的词典跳转到相应的搜索页面
    let searchUrl;
    switch (dictionary) {
        case 'larousse':
            searchUrl = `https://www.larousse.fr/dictionnaires/francais/${encodeURIComponent(searchInput)}`;
            break;
        case 'frdic':
            searchUrl = `https://www.frdic.com/mdicts/fr/${encodeURIComponent(searchInput)}`;
            break;
        case 'wordreference':
            searchUrl = `https://www.wordreference.com/fren/${encodeURIComponent(searchInput)}`;
            break;
        case 'collins':
            searchUrl = `https://www.collinsdictionary.com/dictionary/french-english/${encodeURIComponent(searchInput)}`;
            break;
        case 'reverso':
            searchUrl = `https://dictionary.reverso.net/french-english/${encodeURIComponent(searchInput)}`;
            break;
        case 'linguee':
            searchUrl = `https://www.linguee.com/french-english/search?query=${encodeURIComponent(searchInput)}`;
            break;
        case 'dictionnaire':
            searchUrl = `https://www.le-dictionnaire.com/definition/${encodeURIComponent(searchInput)}`;
            break;
        default:
            alert('请选择词典');
            return;
    }

    // 在新标签页中打开搜索页面
    window.open(searchUrl, '_blank');
});

// 监听回车键
document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});

// 自动补全数据（示例词汇）
const autocompleteData = [
    "Bonjour", "Merci", "S'il vous plaît", "Au revoir", "Oui", "Non", "Excusez-moi",
    "Je t'aime", "Bienvenue", "Comment ça va?", "Parlez-vous anglais?", "Où est la gare?",
    "Je ne comprends pas", "Pardon", "S'il te plaît", "De rien", "À bientôt", "À demain",
    "Je suis désolé", "Je voudrais", "Combien ça coûte?", "Où sont les toilettes?"
];

// 初始化 Fuse.js
const fuseOptions = {
    includeScore: true, // 包含匹配分数
    threshold: 0.3,     // 匹配阈值（0 表示完全匹配，1 表示完全不匹配）
    keys: ['word']      // 搜索的键（如果数据是对象数组）
};

const fuse = new Fuse(autocompleteData.map(word => ({ word })), fuseOptions);

// 获取自动补全建议
function getAutocompleteSuggestions(input) {
    if (!input) return [];
    const results = fuse.search(input);
    return results.map(result => result.item.word); // 返回匹配的词汇
}

// 渲染自动补全建议
function renderAutocompleteSuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('autocomplete-suggestions');
    if (!suggestionsContainer) return;

    if (suggestions.length > 0) {
        suggestionsContainer.innerHTML = suggestions.map(suggestion => `
            <div onclick="selectSuggestion('${suggestion}')">${suggestion}</div>
        `).join('');
        suggestionsContainer.style.display = 'block'; // 显示建议列表
    } else {
        suggestionsContainer.style.display = 'none'; // 隐藏建议列表
    }
}

// 选择建议
function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('search-input');
    searchInput.value = suggestion;
    document.getElementById('autocomplete-suggestions').style.display = 'none'; // 隐藏建议列表
}

// 监听输入框输入事件
document.getElementById('search-input').addEventListener('input', (e) => {
    const input = e.target.value.trim();
    const suggestions = getAutocompleteSuggestions(input);
    renderAutocompleteSuggestions(suggestions);
});

// 点击页面其他区域时隐藏建议
document.addEventListener('click', (e) => {
    const suggestionsContainer = document.getElementById('autocomplete-suggestions');
    if (e.target.id !== 'search-input' && suggestionsContainer) {
        suggestionsContainer.style.display = 'none'; // 隐藏建议列表
    }
}); 