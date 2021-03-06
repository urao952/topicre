"use strict";

const search = document.getElementById('search');
const btns = document.querySelector('#btns');
const genreSelect = document.getElementById('genreSelect_btn');
const wordClear = document.getElementById('wordClear_btn');
const menuContent = document.querySelector('.menu-content');
const searchClear = document.getElementById('searchClear_btn');
const searchBox = document.getElementById('search_box');
const startbtn = document.querySelector('#startbtn');
const stopbtn = document.querySelector('#stopbtn');
const notePad1 = document.querySelector('.notepad1');
const notePad2 = document.querySelector('.notepad2');
const notePad3 = document.querySelector('.notepad3');
const notePad4 = document.querySelector('.notepad4');
const notePad5 = document.querySelector('.notepad5');
const npWord1 = document.querySelector('.np_word1');
const npWord2 = document.querySelector('.np_word2');
const npWord3 = document.querySelector('.np_word3');
const npWord4 = document.querySelector('.np_word4');
const npWord5 = document.querySelector('.np_word5');
const bgColor = document.querySelector('.np_bg');
const bgColor1 = document.querySelector('.np_bg1');
const bgColor2 = document.querySelector('.np_bg2');
const bgColor3 = document.querySelector('.np_bg3');
const bgColor4 = document.querySelector('.np_bg4');
const bgColor5 = document.querySelector('.np_bg5');
const search1 = document.getElementById('search-random');
const search2 = document.getElementById('search-designation');
// const search3=document.getElementById('search-frequent');
let bgColors = [bgColor1, bgColor2, bgColor3, bgColor4, bgColor5];
let notePads = [notePad1, notePad2, notePad3, notePad4, notePad5];
let npWords = [npWord1, npWord2, npWord3, npWord4, npWord5];
let npEntrance = ["notepad1_entrance", "notepad2_entrance", "notepad3_entrance", "notepad4_entrance", "notepad5_entrance",];
let npExit = ["notepad1_exit", "notepad2_exit", "notepad3_exit", "notepad4_exit", "notepad5_exit",];
// let extractionArray = ["三色団子", "きりたんぽ", "博士", "ラー油", "コーヒー牛乳", "海賊船", "防犯ブザー", "鳥", "浪人生", "マット", "鍋", "世界戦争", "韓国語", "高層ビル", "ルービックキューブ", "金縛り", "塵", "おこづかい", "白い", "VTR"];
let extractionArray = [];
// let delay = 100;
let colors = ["#f77188", "#82adf3", "#d367ef", "#02aa8e", "#d3cad3", "#d4ea27", "#63595d", "#45df79", "#e7a037", "#cf8026", "#962c27", "#9df97c"];
let colorArray = [];
// console.log(npWord);
const genrebtn = document.getElementsByClassName('genreBTNs');
const genreSport = document.querySelector('.genre_sport');
const genreEra = document.querySelector('.genre_era');
const genreConstellation = document.querySelector('.genre_constellation');
const genreSDGs = document.querySelector('.genre_SDGs');
let genreApp = false;//ジャンル適用 適用時true
let appArray;
const genreSportArray = ["アーチェリー", "アーティスティックスイミング", "ウエイトリフティング", "カヌー", "スラローム", "カヌー", "スプリント", "ゴルフ", "サーフィン", "サッカー", "スケートボード", "スポーツクライミング", "セーリング", "テコンドー", "テニス", "トライアスロン", "トランポリン", "バスケットボール", "バトミントン", "バレーボール", "ビーチバレー", "ハンドボール", "フェンシング", "ボート", "ボクシング", "ホッケー", "ラグビー", "レスリング", "飛び込み", "競泳", "空手", "陸上競技", "馬術", "柔道", "射撃", "水球", "体操", "新体操", "野球", "ソフトボール", "卓球", "BMX"];
const genreEraArray = ["旧石器", "新石器", "縄文", "弥生", "古墳", "飛鳥", "奈良", "平安", "鎌倉", "南北朝", "室町", "安土桃山", "江戸", "明治", "大正", "昭和", "平成", "令和"]
const genreConstellationArray = ["牡羊座", "牡牛座", "双子座", "蟹座", "獅子座", "乙女座", "てんびん座", "蠍座", "射手座", "山羊座", "水瓶座", "魚座"]
// const genreSDGsArray = ["貧困", "飢餓", "保健", "教育", "ジェンダー", "水", "衛生", "エネルギー", "経済成長", "雇用", "インフラ", "産業化", "イノベーション", "不平等", "持続可能", "気候変動", "海洋資源", "陸上資源", "平和", "実施手段"];
const genreSDGsArray = ["貧困をなくそう", "飢餓をゼロ", "すべての人に健康と福祉を", "質の高い教育をみんなに", "ジェンダー平等を実現しよう", "安全な水とトイレを世界中に", "エネルギーをみんなに", "そしてクリーンに", "働きがいも経済成長も", "産業と技術革新の基盤をつくろう", "国の不平等をなくそう", "住み続けられるまちづくりを", "つくる責任 つかう責任", "気候変動に具体的な対策を", "海の豊かさを守ろう", "陸の豊かさも守ろう", "平和と公正をすべての人に", "パートナーシップで目標を達成しよう"];

for (let i = genrebtn.length - 1; i >= 0; i--) {
    genrebtn[i].addEventListener("click", function () {
        const selectG = document.getElementsByClassName('genreSelecting');
        if (!(selectG[0] == undefined)) {
            if (selectG[0].textContent == genrebtn[i].textContent) {
                for (let i = 0; i < 4; i++) {
                    genrebtn[i].classList.remove("genreSelecting");
                    genreApp=false;
                } return;
            }
        }
        const genreArray = [genreSportArray, genreEraArray, genreConstellationArray, genreSDGsArray];
        appArray = genreArray[i];
        for (let i = 0; i < 4; i++) {
            genrebtn[i].classList.remove("genreSelecting");
        }
        genrebtn[i].classList.add("genreSelecting");
        genreApp=true;
    });
}
// genrebtn.addEventListener('click', (e) => {
//     console.log(e.target);
//     appArray=[];

//     genreSport
// })

// for (var i = btn.length - 1; i >= 0; i--) {
//     btnAction(btn[i],i);
//     } 

//     function btnAction(btnDOM,btnId){
//     // 各ボタンをイベントリスナーに登録
//     btnDOM.addEventListener("click", function(){
//     // activeクラスの追加と削除
//     // thisは、クリックされたオブジェクト
//     this.classList.toggle('active');
// });

//シャッフルの関数を追加
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}

btns.addEventListener('click', () => {
    if (startbtn.classList.contains('hide') == true) {
        startbtn.classList.remove("hide");
        stopbtn.classList.add("hide");
    } else {
        startbtn.classList.add("hide");
        stopbtn.classList.remove("hide");
    }
    const shuffledChoiceColors = shuffle(colors);
    if (extractionArray.length >= 5) {
        for (let i = 0; i < 5; i++) {
            extraction(i, shuffledChoiceColors);
        }
        for (let i = 0; i < 5; i++) {
            extractionArray.shift();
        }
    } else if (extractionArray.length < 5 && extractionArray.length > 0) {
        for (let i = 0; i < extractionArray.length; i++) {
            extraction(i, shuffledChoiceColors);
        }
        for (let i = 0; i < extractionArray.length; i++) {
            extractionArray.shift();
        }
    }


});

function extraction(i, s) {
    colorArray[i] = s[i];
    bgColors[i].style.setProperty("--color", colorArray[i]);
    if (extractionArray.length >= 8) {//取り出した文字の文字数分岐
        let stringWord = extractionArray[i].substring(0, 7);
        let outputWord = stringWord + "…";
        npWords[i].innerHTML = outputWord;
    } else {
        npWords[i].innerHTML = extractionArray[i];
    }
    notePads[i].classList.add(npEntrance[i]);
    setTimeout(() => {
        notePads[i].classList.remove(npEntrance[i]);
        notePads[i].classList.add(npExit[i]);
    }, 600 + 80 * i);
    setTimeout(() => {
        notePads[i].classList.remove(npExit[i]);
    }, 700 + 80 * i);
}

const Search1 = document.getElementById("form1");
const Search2 = document.getElementById("form2");
const Search3 = document.getElementById("form3");


function formCreate(e, f1, f2, f3) {
    const form1 = document.createElement("form");
    form1.className = 'search_form';
    form1.className = 'search_' + e;
    form1.setAttribute("method", "get");
    form1.setAttribute("action", "https://www.google.co.jp/search");
    form1.setAttribute("target", "_blank");
    searchBox.appendChild(form1);

    let searchFormBox = document.querySelector('.search_' + e);
    const input1 = document.createElement("input");
    input1.id = 'search';
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "q");
    input1.setAttribute("size", "24");
    input1.setAttribute("maxlength", "255");
    input1.setAttribute("value", f1 + " " + f2 + " " + f3);
    searchFormBox.appendChild(input1);

    const input2 = document.createElement("input");
    input2.className = 'search_submit';
    input2.setAttribute("type", "submit");
    input2.setAttribute("name", "btng");
    input2.setAttribute("value", "検索");
    searchFormBox.appendChild(input2);

    const input3 = document.createElement("input");
    input3.className = 'search_submit';
    input3.setAttribute("type", "hidden");
    input3.setAttribute("name", "hl");
    input3.setAttribute("value", "ja");
    searchFormBox.appendChild(input3);
}

window.onload = function () {
    let Animation = function () {

        let pageTop = document.getElementById('pagetop');


        let rect = pageTop.getBoundingClientRect();

        let scrollTop = rect.top + window.pageYOffset;

        if (scrollTop > 500) {
            pageTop.classList.add('show');
        } else {
            pageTop.classList.remove('show');
        }
    }
    window.addEventListener('scroll', Animation);
}

//検索クリア
searchClear.addEventListener('click', () => {
    searchBox.innerHTML = null;
});
//言葉クリア
wordClear.addEventListener('click', () => {
    finalTranscript = "";//微妙
});

//ジャンル
genreSelect.addEventListener('click', function () {
    menuContent.classList.toggle('menu-content_animation');
});
//問題＝スクロールできない