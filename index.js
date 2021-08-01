function init() {
    langHandler();
    progressBarHandler();
}

function langHandler() {
    var langFlags = document.querySelectorAll('.flag');

    langFlags.forEach(element => {
        element.addEventListener('click', function() {
            changeLanguage(element);
        });
    });
}

function changeLanguage(element) {
    if(element.classList.contains('active')) return;

    var arr = element.getElementsByTagName('img')[0].src.split('/');
    var lang = arr[arr.length - 1].split('.')[0] + '.json';

    fetch(lang).then(response => response.json()).then(json => {
        for (var key in json) {
            if (json.hasOwnProperty(key)) {
                document.querySelector(`[langJSON="${key}"]`).textContent = json[key];
            }
        }
    });
    
    var activeLang = document.getElementsByClassName('active')[0];
    var oldFlag = activeLang.children[0];

    var selectedLang = element;
    var newFlag = selectedLang.children[0];;

    activeLang.appendChild(newFlag);
    selectedLang.appendChild(oldFlag);
}

function progressBarHandler() {
    var progressBars = document.querySelectorAll('.progress-container');

    progressBars.forEach(element => {
        var percentage = element.getElementsByClassName('percentage')[0].textContent;
        var progress = element.getElementsByClassName('progress')[0];

        progress.style.width = percentage;
    });
}

window.onload = init();