var img = document.querySelector('#container img');
var like = document.querySelector('#container i');

img.addEventListener('dblclick', function(){
    like.style.opacity = 1;
    like.style.transform = 'translate(-50%, -50%) scale(2) rotate(0deg)';

    setTimeout(function () {
        like.style.transform = 'translate(-50%,-370%) scale(2) rotate(0deg)';
    }, 300);

    setTimeout(function () {
        like.style.opacity = 0;
    }, 450);

    setTimeout(function () {
        like.style.transform = 'translate(-50%,-50%) scale(0) rotate(-90deg)';
    }, 900);
})