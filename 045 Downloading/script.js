var info = document.querySelector('#card h3');
var load = document.querySelector('#load');
var percentage = document.querySelector('#btm h1');
var btn = document.querySelector('#btm button');
var a = 0;

btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none';
    btn.innerHTML = 'Downloading...';
    // btn.style.backgroundColor = 'royalblue';
    var num = 50 + Math.floor(Math.random()*50);

    info.innerHTML = `Download will complete in <span>${num/10}</span> seconds`
    
    var int = setInterval(function(){
        a++;
        load.style.width = a + '%';
        percentage.innerHTML = `${a}%`;
    }, num);
    
    setTimeout(function(){
        clearInterval(int);
        btn.style.opacity = 0.5;
        btn.innerHTML = 'Downloaded';
    },num*100);

})