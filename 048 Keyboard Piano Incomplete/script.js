var keys = [
    {
        key : 'Q',
        music : 'Assets/28.mp3'
    },
    {
        key : 'W',
        music : 'Assets/29.mp3'
    },
    {
        key : 'E',
        music : 'Assets/30.mp3'
    },
    {
        key : 'R',
        music : 'Assets/31.mp3'
    },
    {
        key : 'T',
        music : 'Assets/32.mp3'
    },
    {
        key : 'Y',
        music : 'Assets/33.mp3'
    },
    {
        key : 'Z',
        music : 'Assets/34.mp3'
    },
    {
        key : 'X',
        music : 'Assets/35.mp3'
    },
    {
        key : 'C',
        music : 'Assets/36.mp3'
    },
    {
        key : 'V',
        music : 'Assets/37.mp3'
    },
    {
        key : 'B',
        music : 'Assets/38.mp3'
    },
    {
        key : 'N',
        music : 'Assets/39.mp3'
    },
    {
        key : 'M',
        music : 'Assets/40.mp3'
    },
    {
        key : 'A',
        music : 'Assets/41.mp3'
    },
    {
        key : 'S',
        music : 'Assets/42.mp3'
    },
    {
        key : 'D',
        music : 'Assets/43.mp3'
    },
    {
        key : 'F',
        music : 'Assets/44.mp3'
    },
    {
        key : 'G',
        music : 'Assets/45.mp3'
    },
    {
        key : 'H',
        music : 'Assets/46.mp3'
    }
]

var main = document.querySelector('main');
var sum = '';
keys.forEach(function(elem){
    sum += `<div class="key" data-music="${elem.music}"> <h3>${elem.key}</h3></div>`;
})

main.innerHTML = sum;

var allKeys = document.querySelectorAll('.key');

allKeys.forEach(function(btn){
    btn.addEventListener('click',function(){
        var music = btn.getAttribute("data-music");
        var aud = new Audio(music);
        aud.play()
    });
});

main.addEventListener("keydown", function(dets){
    keys.forEach(function(elem){
        if(dets.code === elem.key){
            new Audio(elem.music).play();
        }
    });
});