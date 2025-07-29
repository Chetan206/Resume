var saiyaaara = document.getElementById('saiyaara-audio');
var count = 0;
function saiyaaraPlay(){
    if (count == 0) {
            count = 1;
            saiyaaara.play();

    }else{
        count = 0;
        saiyaaara.pause();
    }
}

var sanamTeriKasam = document.getElementById('sanam');
var count = 0;
function sanamPlay(){
    if (count == 0) {
            count = 1;
            sanamTeriKasam.play();

    }else{
        count = 0;
        sanamTeriKasam.pause();
    }
}

var palPalJeena = document.getElementById('palpal');
var count = 0;
function palpalPlay(){
    if (count == 0) {
            count = 1;
            palPalJeena.play();

    }else{
        count = 0;
        palPalJeena.pause();
    }
}

var findingHer = document.getElementById('findingher');
var count = 0;
function findingPlay(){
    if (count == 0) {
            count = 1;
            findingHer.play();

    }else{
        count = 0;
        findingHer.pause();
    }
}

var sahibaSong = document.getElementById('sahiba');
var count = 0;
function sahibaPlay(){
    if(count == 0){
        count = 1;
        sahibaSong.play();
    }else{
        count = 0;
        sahibaSong.pause();
    }
}





function loadNewpage(){
    let x = new  XMLHttpRequest();
    x.onload = function(){
        document.getElementById("demo").innerHTML = this.responseText;
    }
    x.open("GET", "loginPage.html");
    x.send();
}

