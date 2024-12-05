const startButton = document.querySelector('#start');
const choice0 = document.querySelector('#choice0');
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const question = document.querySelector('#question');

const correct = document.querySelector('#correct');
const total = document.querySelector('#total');

const ans = document.querySelector('#ans');

let correctTotal = 0;
let quizTotal = 0;
let correctnum;
let ch0, ch1, ch2, ch3;

function getRandomInt(length) {
    return Math.floor(Math.random() * length);
  }

function makequiz(){
    ch0 = getRandomInt(word.length);
    ch1 = getRandomInt(word.length);
    ch2 = getRandomInt(word.length);
    ch3 = getRandomInt(word.length);

    let chlst = [ch0,ch1,ch2,ch3];

    choice0.innerHTML = word[ch0].jpn;
    choice1.innerHTML = word[ch1].jpn;
    choice2.innerHTML = word[ch2].jpn;
    choice3.innerHTML = word[ch3].jpn;

    correctnum = chlst[getRandomInt(4)];
    question.innerHTML = word[correctnum].eng;
}

startButton.addEventListener('click',()=>{
    makequiz();
})

choice0.addEventListener('click',()=>{
    ans.innerHTML = word[correctnum].jpn;
    if(ch0 === correctnum){
        console.log('正解');
        correctTotal++;
        quizTotal++;
        correct.innerHTML = correctTotal;
        total.innerHTML = quizTotal;
    }else{
        console.log('不正解');
        quizTotal++;
        total.innerHTML = quizTotal;
    }
})

choice1.addEventListener('click',()=>{
    ans.innerHTML = word[correctnum].jpn;
    if(ch1 === correctnum){
        console.log('正解');
        correctTotal++;
        quizTotal++;
        correct.innerHTML = correctTotal;
        total.innerHTML = quizTotal;
    }else{
        console.log('不正解');
        quizTotal++;
        total.innerHTML = quizTotal;
    }
})

choice2.addEventListener('click',()=>{
    ans.innerHTML = word[correctnum].jpn;
    if(ch2 === correctnum){
        console.log('正解');
        correctTotal++;
        quizTotal++;
        correct.innerHTML = correctTotal;
        total.innerHTML = quizTotal;
    }else{
        console.log('不正解');
        quizTotal++;
        total.innerHTML = quizTotal;
    }
})

choice3.addEventListener('click',()=>{
    ans.innerHTML = word[correctnum].jpn;
    if(ch3 === correctnum){
        console.log('正解');
        correctTotal++;
        quizTotal++;
        correct.innerHTML = correctTotal;
        total.innerHTML = quizTotal;
    }else{
        console.log('不正解');
        quizTotal++;
        total.innerHTML = quizTotal;
    }
})

const word = [
    { eng: 'apple', jpn: 'リンゴ' },
    { eng: 'orange', jpn: 'みかん' },
    { eng: 'banana', jpn: 'バナナ' },
    { eng: 'grape', jpn: 'ぶどう' },
    { eng: 'watermelon', jpn: 'スイカ' },
    { eng: 'dog', jpn: '犬' },
    { eng: 'cat', jpn: '猫' },
    { eng: 'fish', jpn: '魚' },
    { eng: 'bird', jpn: '鳥' },
    { eng: 'rabbit', jpn: 'ウサギ' },
    { eng: 'lion', jpn: 'ライオン' },
    { eng: 'tiger', jpn: 'トラ' },
    { eng: 'elephant', jpn: '象' },
    { eng: 'car', jpn: '車' },
    { eng: 'bus', jpn: 'バス' },
    { eng: 'train', jpn: '電車' },
    { eng: 'bicycle', jpn: '自転車' },
    { eng: 'airplane', jpn: '飛行機' },
    { eng: 'ship', jpn: '船' },
    { eng: 'school', jpn: '学校' },
    { eng: 'teacher', jpn: '先生' },
    { eng: 'student', jpn: '生徒' },
    { eng: 'classroom', jpn: '教室' },
    { eng: 'homework', jpn: '宿題' },
    { eng: 'book', jpn: '本' },
    { eng: 'pen', jpn: 'ペン' },
    { eng: 'pencil', jpn: '鉛筆' },
    { eng: 'notebook', jpn: 'ノート' },
    { eng: 'desk', jpn: '机' },
    { eng: 'chair', jpn: '椅子' },
    { eng: 'eraser', jpn: '消しゴム' },
    { eng: 'father', jpn: '父' },
    { eng: 'mother', jpn: '母' },
    { eng: 'brother', jpn: '兄弟' },
    { eng: 'sister', jpn: '姉妹' },
    { eng: 'family', jpn: '家族' },
    { eng: 'friend', jpn: '友達' },
    { eng: 'house', jpn: '家' },
    { eng: 'kitchen', jpn: 'キッチン' },
    { eng: 'bathroom', jpn: 'バスルーム' },
    { eng: 'bedroom', jpn: '寝室' },
    { eng: 'living room', jpn: 'リビングルーム' },
    { eng: 'computer', jpn: 'コンピューター' },
    { eng: 'smartphone', jpn: 'スマートフォン' },
    { eng: 'television', jpn: 'テレビ' },
    { eng: 'music', jpn: '音楽' },
    { eng: 'movie', jpn: '映画' },
    { eng: 'game', jpn: 'ゲーム' },
    { eng: 'sport', jpn: 'スポーツ' },
    { eng: 'soccer', jpn: 'サッカー' },
    { eng: 'baseball', jpn: '野球' },
    { eng: 'basketball', jpn: 'バスケットボール' },
    { eng: 'tennis', jpn: 'テニス' },
    { eng: 'running', jpn: 'ランニング' },
    { eng: 'shopping', jpn: '買い物' },
    { eng: 'restaurant', jpn: 'レストラン' },
    { eng: 'coffee', jpn: 'コーヒー' },
    { eng: 'tea', jpn: 'お茶' },
    { eng: 'water', jpn: '水' },
    { eng: 'milk', jpn: '牛乳' },
    { eng: 'bread', jpn: 'パン' },
    { eng: 'rice', jpn: 'ご飯' },
    { eng: 'noodle', jpn: '麺' },
    { eng: 'soup', jpn: 'スープ' },
    { eng: 'meat', jpn: '肉' },
    { eng: 'chicken', jpn: '鶏肉' },
    { eng: 'egg', jpn: '卵' },
    { eng: 'vegetable', jpn: '野菜' },
    { eng: 'fruit', jpn: '果物' },
    { eng: 'sun', jpn: '太陽' },
    { eng: 'moon', jpn: '月' },
    { eng: 'star', jpn: '星' },
    { eng: 'sky', jpn: '空' },
    { eng: 'cloud', jpn: '雲' },
    { eng: 'rain', jpn: '雨' },
    { eng: 'snow', jpn: '雪' },
    { eng: 'wind', jpn: '風' },
    { eng: 'flower', jpn: '花' },
    { eng: 'tree', jpn: '木' },
    { eng: 'mountain', jpn: '山' },
    { eng: 'river', jpn: '川' },
    { eng: 'ocean', jpn: '海' },
    { eng: 'country', jpn: '国' },
    { eng: 'city', jpn: '都市' },
    { eng: 'town', jpn: '町' },
    { eng: 'village', jpn: '村' },
    { eng: 'station', jpn: '駅' },
    { eng: 'hospital', jpn: '病院' },
    { eng: 'library', jpn: '図書館' },
    { eng: 'post office', jpn: '郵便局' },
    { eng: 'bank', jpn: '銀行' },
    { eng: 'airport', jpn: '空港' },
    { eng: 'hotel', jpn: 'ホテル' },
    { eng: 'week', jpn: '週' },
    { eng: 'month', jpn: '月' },
    { eng: 'year', jpn: '年' },
    { eng: 'morning', jpn: '朝' },
    { eng: 'afternoon', jpn: '午後' },
    { eng: 'evening', jpn: '夕方' },
    { eng: 'night', jpn: '夜' },
    { eng: 'season', jpn: '季節' },
    { eng: 'spring', jpn: '春' },
    { eng: 'summer', jpn: '夏' },
    { eng: 'autumn', jpn: '秋' },
    { eng: 'winter', jpn: '冬' },
    { eng: 'happy', jpn: '幸せな' },
    { eng: 'sad', jpn: '悲しい' },
    { eng: 'angry', jpn: '怒っている' },
    { eng: 'tired', jpn: '疲れた' },
    { eng: 'hungry', jpn: 'お腹が空いた' },
    { eng: 'thirsty', jpn: '喉が渇いた' },
    { eng: 'run', jpn: '走る' },
    { eng: 'eat', jpn: '食べる' },
    { eng: 'drink', jpn: '飲む' },
    { eng: 'sleep', jpn: '眠る' },
    { eng: 'study', jpn: '勉強する' },
    { eng: 'read', jpn: '読む' },
    { eng: 'write', jpn: '書く' },
    { eng: 'listen', jpn: '聞く' },
    { eng: 'speak', jpn: '話す' },
    { eng: 'play', jpn: '遊ぶ' },
    { eng: 'watch', jpn: '見る' },
    { eng: 'walk', jpn: '歩く' },
    { eng: 'open', jpn: '開ける' },
    { eng: 'close', jpn: '閉じる' },
    { eng: 'buy', jpn: '買う' },
    { eng: 'sell', jpn: '売る' },
    { eng: 'help', jpn: '助ける' },
    { eng: 'teach', jpn: '教える' },
    { eng: 'learn', jpn: '学ぶ' },
    { eng: 'love', jpn: '愛する' },
    { eng: 'hate', jpn: '嫌う' },
    { eng: 'think', jpn: '考える' },
    { eng: 'know', jpn: '知っている' },
    { eng: 'understand', jpn: '理解する' },
    { eng: 'remember', jpn: '覚えている' },
    { eng: 'forget', jpn: '忘れる' },
    { eng: 'give', jpn: '与える' },
    { eng: 'receive', jpn: '受け取る' },
    { eng: 'meet', jpn: '会う' },
    { eng: 'call', jpn: '電話する' },
    { eng: 'wait', jpn: '待つ' },
    { eng: 'begin', jpn: '始める' },
    { eng: 'finish', jpn: '終える' },
    { eng: 'move', jpn: '動く' },
    { eng: 'stop', jpn: '止まる' },
    { eng: 'jump', jpn: '跳ぶ' },
    { eng: 'sit', jpn: '座る' },
    { eng: 'stand', jpn: '立つ' },
    { eng: 'work', jpn: '働く' },
    { eng: 'drive', jpn: '運転する' },
    { eng: 'fly', jpn: '飛ぶ' },
    { eng: 'swim', jpn: '泳ぐ' },
    { eng: 'cook', jpn: '料理する' },
    { eng: 'clean', jpn: '掃除する' },
    { eng: 'sing', jpn: '歌う' },
    { eng: 'dance', jpn: '踊る' },
    { eng: 'paint', jpn: '絵を描く' },
    { eng: 'draw', jpn: '描く' },
    { eng: 'build', jpn: '建てる' },
    { eng: 'break', jpn: '壊す' },
    { eng: 'cut', jpn: '切る' },
    { eng: 'use', jpn: '使う' },
    { eng: 'find', jpn: '見つける' },
    { eng: 'lose', jpn: '失う' },
    { eng: 'travel', jpn: '旅行する' },
    { eng: 'send', jpn: '送る' },
    { eng: 'receive', jpn: '受け取る' },
    { eng: 'win', jpn: '勝つ' },
    { eng: 'lose', jpn: '負ける' },
    { eng: 'choose', jpn: '選ぶ' },
    { eng: 'change', jpn: '変える' },
    { eng: 'enjoy', jpn: '楽しむ' },
    { eng: 'feel', jpn: '感じる' },
    { eng: 'smile', jpn: '笑う' },
    { eng: 'cry', jpn: '泣く' },
    { eng: 'agree', jpn: '同意する' },
    { eng: 'disagree', jpn: '反対する' },
    { eng: 'promise', jpn: '約束する' },
    { eng: 'decide', jpn: '決める' },
    { eng: 'solve', jpn: '解決する' },
    { eng: 'explain', jpn: '説明する' },
    { eng: 'answer', jpn: '答える' },
    { eng: 'ask', jpn: '質問する' },
    { eng: 'borrow', jpn: '借りる' },
    { eng: 'lend', jpn: '貸す' },
    { eng: 'save', jpn: '節約する' },
    { eng: 'spend', jpn: '使う' },
    { eng: 'grow', jpn: '育つ' },
    { eng: 'plant', jpn: '植える' },
    { eng: 'watch', jpn: '見る' },
    { eng: 'hear', jpn: '聞こえる' },
    { eng: 'touch', jpn: '触れる' },
    { eng: 'smell', jpn: '匂う' },
    { eng: 'taste', jpn: '味わう' },
    { eng: 'wear', jpn: '着る' },
    { eng: 'wash', jpn: '洗う' },
    { eng: 'break', jpn: '壊す' },
    { eng: 'repair', jpn: '修理する' }
];
