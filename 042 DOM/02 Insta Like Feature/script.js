var img = document.querySelector('#container img');
var like = document.querySelector('#container i');

img.addEventListener('dblclick', function(){
    like.style.transform = 'translate(-50%, -50%) scale(2)'

    setTimeout(function(){
        like.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 1000)
})