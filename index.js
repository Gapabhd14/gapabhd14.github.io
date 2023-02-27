// variables
let wordNum = 1;
let titleRights = [`מילון מושגים`, `זכויות החייל החולה`, `מוקדי חיל הרפואה`, `ביקורופא`, `קבלת טיפול רפואי`];
let changeColor = [`#6fa8dcff`, `#ffd966ff`, `#e06666ff` , `#93c47dff`, `#8e7cc3ff`];
let changeColorConteiner = [`#96b9d9ff`, `#ffe494ff`, `#e47b7bff`];
let numBandaids = [5, 3, 3, 0, 0];
let titleBandaids = [`חופ"ל`, `רופא יחידה`, `ימי ג'`, `ימי ב'`, `קב"ן`, `טיפול רפואי \n תוך 24 שעות`, `תרופות בחינם`, `טיפולי שיניים`, `זימון תורים`, `מוקד רפואה דחופה`, `מידע וסיוע`];
let textBandaids = [`חובש פלוגתי. הסמכות הרפואית הראשונה אשר תפגוש בכל מקרה רפואי, הוא אחראי על טיפול ומעקב בריאות חייל הפלוגה.`,
`מקביל לרופא משפחה`,
`ימי מנוחה לצורך החלמה בבית או ביחידה. משך יום מחלה הינו עד 08:00 בבוקר ולפחות 24 שעות. כלומר, במידה וקיבלת יום מחלה  אחד ביום ראשון בשעה 19:00, הוא ייגמר ביום שלישי בשעה 8:00, כל יום מחלה נוסף יתחיל ב8:00 למשך 24 שעות נוספות.`,
`מספר שעות עד יום אשר מקנים הגבלה או פטור מפעילות לצורך מנוחה.`,
`קצין בריאות נפש, עובד סוציאלי או פסיכולוג קליני. הגורם המיועד לטיפול בבריאות הנפש של החיילים.`,
`חייל זכאי לטיפול רפואי עד 24 שעות מרגע הפנייה. פעם ביום מתקיים מסדר חופ"ל.`,
`רוב התרופות בסל התרופות של קופות החולים נמצאות גם בסל התרופות של צה"ל ומגיעות לחיילים בחינם במרפאות היחידה (בליווי מרשם צבאי).`,
`כל חייל זכאי לטיפולי שיניים הבאים : בדיקה שגרתית, סתימות, מבנים, טיפולי שורש, עקירות, שיננית, ייעוץ מומחים`,
`זימון תורים למרכזי הרפואה השונים. מומלץ להשתמש באפליקצית "זימון תורים" שתוזכר בהמשך ולפנות למוקד במידה וישנה בעיה.`,
`מענה רפואי טלפוני ע"י צוות סיעוד ורפואה מעבר לשעות פעילות מרפאות היחידה - השירות ניתן בימים א' - ה' בין השעות 17:00-23:00 ובימי שישי וערבי חג בין השעות 08:00-12:00.`,
`מידע וסיוע בכל הנוגע לפתרון בעיות התחברות, דרכי הגעה, שאלות, מידע כללי ועוד...`];
let textRight = [`"מוקד מקול הלב" מוקד זימון התורים והמידע של חיל הרפואה. המוקד זמין לשירותכם 24/7 ומספק שירותים שונים לאורך שעות היום. 03-9489999 / *6690 \n להלן רשימת השירותים הניתנים דרך המוקד :`, 
`ביקורופא הן מרפאות חירום אשר עובדות בשיתוף עם צה"ל. מרפאות אלו מספקות שירותי רפואה דחופה - משמע, במידה והנך זקוק לטיפול רפואי תוכל לקבל טיפול לבעיות הרפואיות בדחיפות. חשוב לציין כי הטיפול השגרתי והמעקב אחרי בריאותך יבוצע במרפאת היחידה, לכן בכל בעיה רפואית שהיא יש לפנות לחופ"ל. \n בהתאם לפקודות הצבא, חייל אשר אינו נמצא ביחידה זכאי לפנות למרפאות ביקור רופא תוך עדכון מפקדיו, אך ללא צורך באישורים. \n מידע אודות סניפי מרפאות ושעות קבל :`,
`קבלת טיפול רפואי - במידה והינך מעוניין בטיפול רפואי עלייך לפנות למפקד. המפקד ייפנה אותך למסדר חופ"ל. מסדר חופ"ל מתקיים אחת ליום כל יום, בהתאם לפוקדות הצבא. \n במסדר חופ"ל תקבל את הטיפול . הייעוץ הרפואי אשר בסמכות החובש, במידה ויש צורך החופ""ל יפנה אותך לרופא היחידה. אצל רופא היחידה תקבל את המשך הטיפול הרפואי - כולל יפול תרופתי, הפניות לבירור נוסף, פטורים וימי מנוחה.`];

// onLoad func
// ===========
// event click for lessons
// Michal Blechman, 23/2/23
window.addEventListener("load", ()=>{
    let interavalStartAni = setInterval((event)=>{
        document.getElementById(`word${wordNum}`).style.visibility = "visible";
        wordNum++;
        if(wordNum == 8) {
            document.getElementById(`btn-start`).style.visibility = "visible";
            document.getElementById(`btn-start`).addEventListener("click", medicineRights);
            clearInterval(interavalStartAni);
        }
    },400);
});

// medicineRights func
// ===================
// summary of all the rights
// Michal Blechman, 23/2/23 26/2/23
const medicineRights = (event)=>{
    // NO SHOW
    document.getElementById(`start-animation`).style.display = "none";
    document.getElementById("sum-rights").innerHTML = "";
    document.getElementById(`lesson-right`).style.display = "none";
    // SHOW 
    document.getElementById(`rights`).style.display = "inline-block";
    document.getElementById(`sum-rights`).style.display = "inline-block";

    document.getElementById(`btn`).innerText = `כ"כ פשוט הבנתי`;
    document.body.style.backgroundColor = `#f6b26bff`;

    document.getElementById("title").innerText = `הזכויות והאפשרויות שלך בכל הנוגע לרפואה בצה"ל`;
    for(let i=1; i<=5; i++) {
        document.getElementById("sum-rights").innerHTML += `<img src="right${i}.png" class="rightImg" id="pill${i}"/>`;
        document.getElementById(`pill${i}`).addEventListener("click", rightLessons);
    }
    for(let j=1; j<=5; j++) {
        document.getElementById(`pill${j}`).addEventListener("click", (event)=>{
            rightLessons(j);
        });
    }
}

// rightLessons func
// =================
// rights lessons
// Michal Blechman, 26/2/23
const rightLessons = (rightNum)=>{
    // NO SHOW
    document.getElementById(`sum-rights`).style.display = "none";
    document.getElementById("black-conteiner").style.display = "none";
    document.getElementById("text-right").style.display = "none";
    // SHOW
    document.getElementById(`lesson-right`).style.display = "inline-block";

    document.getElementById("band-aid").style.top = "15vh";
    document.getElementById(`btn`).innerText = `ואוו מגניב`;
    document.getElementById(`btn`).addEventListener("click", medicineRights);

    document.getElementById(`title`).innerText = titleRights[rightNum-1];
    if(rightNum == 4 || rightNum == 5) {
        document.getElementById(`second-title`).style.display = "none";
    } else {
        document.getElementById(`second-title`).style.display = "inline-block";
    }
    document.body.style.backgroundColor = changeColor[rightNum-1];
    document.getElementById(`band-aid`).innerHTML = ``;
    let numBandaid = 1; // for band aid apeerance
    document.getElementById(`band-aid`).style.height = `62vh`;
    if(rightNum == 2) {
        numBandaid = 6;
        document.getElementById(`band-aid`).style.height = `36vh`;
    } else if(rightNum == 3) {
        numBandaid = 9;
        document.getElementById(`band-aid`).style.height = `36vh`;
    }
    for(let i = 1; i <= numBandaids[rightNum-1]; i++) {
        document.getElementById(`band-aid`).innerHTML += `<img src="bandaid${numBandaid}.png" class="bandaid" id="bandaid-click${numBandaid}"/>`;
        numBandaid++;
    }
    numBandaid = 1; // for event listener
    if(rightNum == 2) {
        numBandaid = 6;
    } else if(rightNum == 3) {
        numBandaid = 9;
    }
    for(let j = 1; j <= numBandaids[rightNum-1]; j++) {
        document.getElementById(`bandaid-click${numBandaid}`).addEventListener("click", (event)=>{
            bandaidLesson(event, rightNum);
        });
        numBandaid++;
    }

    // LESSON ADDS
    if(rightNum == 3 || rightNum == 4 || rightNum == 5) {
        document.getElementById("band-aid").style.top = "50vh";
        document.getElementById("text-right").style.display = "inline-block";
        document.getElementById("text-right").innerText = textRight[rightNum-3];
    }
}

// bandaidLesson func
// ==================
// lesson inside bandaid
// Michal Blechman, 27/2/23
const bandaidLesson = (event, rightNumLesson)=> {
    // SHOW
    document.getElementById("black-conteiner").style.display = "inline-block";
    // NO SHOW
    document.getElementById("alert").style.display = "none";

    document.getElementById(`close-btn`).addEventListener("click", (event)=>{
        rightLessons(rightNumLesson);
    });

    for(let i = 0; i <= 2; i++) {
        if(rightNumLesson == i+1) {
            document.getElementById(`right-text-conteiner`).style.backgroundColor = changeColorConteiner[i];
        } 
    }

    let numLessonBandaid = event.currentTarget.id.charAt(13);
    if(event.currentTarget.id.charAt(14) != "") {
        numLessonBandaid = Number(event.currentTarget.id.charAt(14))+10;
    }
    document.getElementById(`title-bandaid`).innerText = titleBandaids[numLessonBandaid-1];
    document.getElementById(`text-bandaid`).innerText = textBandaids[numLessonBandaid-1];

    // LESSON ADDS
    if(Number(numLessonBandaid) == 7) {
        document.getElementById("alert").style.display = "inline-block";
    }
}