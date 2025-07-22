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