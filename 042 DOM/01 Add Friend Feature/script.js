var btn = document.querySelector('button')
var h3 = document.querySelector('h3')

let flag = 0;
btn.addEventListener('click', function(){
    if(flag === 0){
        h3.innerHTML = 'Friends'
        h3.style.color = 'green'
        btn.innerHTML = 'Remove Friend'
        btn.style.backgroundColor = 'grey'
        flag = 1;
    }else{
        h3.innerHTML = 'Strangers'
        h3.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        btn.style.backgroundColor = 'rgb(9, 93, 93)'
        flag = 0;
    }
})