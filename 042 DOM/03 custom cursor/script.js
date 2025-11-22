var crsr = document.querySelector('#cursor');
var main = document.querySelector('main');

main.addEventListener('mousemove', function(position){
    crsr.style.left = position.x + 'px'; 
    crsr.style.top = position.y + 'px'; 
})