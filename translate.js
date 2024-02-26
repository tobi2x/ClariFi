let langoption = document.querySelectorAll('ul');
// const langoption = document.querySelectorAll('language-buttons'); // Adjust the selector as needed
let select = document.querySelector("h2.lato-bold");
let transbutton = document.getElementById('translate');

let fromText = document.getElementById("fromText");
let toTranslate = document.getElementById("toTranslate");
let lang1 = "en-GB";
let lang2 = "es-ES";
let text = "";

langoption.forEach((get, con) =>{
    for(let countryCode in language){
        console.log(language[countryCode]);
        let option = '<li><a id=\"' + countryCode + '\" value=\"' + countryCode + '\">' + language[countryCode] +'</a></li>';
        console.log(option);
        get.insertAdjacentHTML('beforeend', option);

        let button = document.getElementById(countryCode);
        button.addEventListener('click', function() {
            lang2 = countryCode;
            console.log(lang2);
        });
    }
});

fromText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('Enter key pressed!');
        // Perform desired actions here
        console.log("I detect");
    

        let content = fromText.value;
        let transLINK = 'https://api.mymemory.translated.net/get?q=' + content + '!&langpair=' + lang1 + '|' + lang2;

        // console.log(transLINK);

        fetch(transLINK).then(translate => translate.json()).then(data => {
            toTranslate.value = data.responseData.translatedText;
        });
     }
});