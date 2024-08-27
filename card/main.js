const monstersNames = [
  "מפלץ ביצות" ,"בולען עצמות","גולום הקרח","דרקון המנגל","עין רעה","זיקית הנחשים",
  "שרקן הקרח","טנק גלומי","יצור הקרקס","חשמל סטטי","גורילת ריקבון","פיל הברזל",
  "מגה תינוק","משולש רשע","אריה כחול","ציפור המוות","ארטיקונדה","ספינת הזמן",
  "דמון","האקליפטוס","דובי מטורף","פרצל","שד חפרפר","פותחן בלהות","הרמבוזג","הצל",
  "קרנפיר הדמעות","הגריפין הקטלני","חייל הרוח","קריפר","פיקאסו","שילבי","אוכל זבל",
  "השד של העץ","חרב זהב","אוכל פחים","פיקאסוס האגרופים","סלבדור","הגולם","פלגן הצללים",
  "הנפץ","סקלי האבן","נחש העץ","השעון הנוזל","העקום הנופל","כלבית הנמל","השרף העליון","אפר אשפתות"
];


const robotNames = [
  "איזנברג","גלגל שיניים","זיפון","חשמלגז","טורבינו","מיתר הפלדה","לייזר","מגנטו","ננו",
  "סופרסוניק", "עיקום", "פלזמה", "ציודור", "קונדנסור", "רדר", "סונאר", "אלקטרון", "פרוטון",
  "אטומוטון","גיגה","דריל","צלינדר","ווינר","שארק","מלך הבנזין","בוכנה","ידען","כסטרופ",
  "להבה","מנקר","נפוש","סוסמן","עין הנץ","רובומאשין","צוקר","ספרינגר","רולינג","קרוק",
  "תבער","אולטרה","בוקסר","אנטנה","טוויסטר","טורנדו","פלאש","צילינדר","חץ","טרמינל","זיקוק הברזל"
];

const catNames = [
  "גרי", "מיאו", "שושי", "פלופי", "טיגריס", "סמי", "מונצ'י", "לוקי", "מישו", "צ'ארלי",
  "ניוול", "קילו", "בלו", "מייזי", "פופי", "פיבי", "לילי", "גילי", "פלופי", "בלייזר",
  "צ'יפס", "זמבלולה", "מור", "גינג'ר", "ספינקס", "פידו", "קיסה", "קוקי", "מלכה", "סימבה",
  "זלדה", "שוקו", "מיון", "מיצי", "נושא", "אביב", "מזל", "מישי", "מרגלית", "צ'אפי",
  "פיית'ון", "מימו", "גרטי", "פסיפיק", "מיו", "מרווין"
];




const cardImg = document.getElementById('cardImg');
const card = document.getElementById('card');
const nameH1 = document.getElementById('nameH1');
const nameInput = document.getElementById('nameInput');

let cardType = 'מפלצת';
let cardName = 'אריק המדריך';
let heart = '❤️';

function changeType(type) { 
    cardType = type;
    document.getElementById('typeP').innerHTML = cardType;
    changeImg()
}


function changeImg() { 
    let setNum = 1;
    if (cardType === 'מפלצת') {
        setNum =2
    } else if (cardType === 'חתול') {
        setNum=4
    }
    cardImg.setAttribute('src', 'https://robohash.org/'+cardName+'?set=set'+setNum)
}

function changeName() { 
    cardName = nameInput.value;
    nameH1.innerHTML = cardName;
    changeImg();
}

function randomName() { 
    let array = robotNames;
    if (cardType === 'מפלצת') {
        array =monstersNames
    } else if (cardType === 'חתול') {
        array=catNames
    }
    cardName = array[Math.floor(Math.random() * array.length)]
    nameInput.value=cardName
    changeName()
}

changeImg()

function setDef() { 
    let def = document.getElementById('defInput').value;
    document.getElementById('defSpan').innerHTML = def;
}
function setAtt() { 
    let att = document.getElementById('attInput').value;
    document.getElementById('powerSpan').innerHTML = att;
}
function setLife() { 
    let life = document.getElementById('lifeInput').value;
    if (life > 5) life = 5;
    if (life < 1) life = 1;
    document.getElementById('lifeH3').innerHTML = heart.repeat(life);
}

function setHeart(emoji){
    heart = emoji;
    setLife()
}

function setFont(font) { 
    card.style.fontFamily = font;
}

function setColor() { 
    card.style.color = document.getElementById('colorInput1').value;
}
function setBorder() { 
    card.style.borderColor = document.getElementById('colorInput2').value;
}


function setCard(style){
    card.classList =[];
    card.classList.add(style)
}



