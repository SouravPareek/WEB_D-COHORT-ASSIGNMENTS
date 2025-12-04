var para = document.querySelector('#para');
var h1 = document.querySelector('h1');
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const para_text = para.textContent;
const h_text = h1.textContent;
let len_para = para_text.length;
let len_h = h_text.length;

let iteration_1 = 0;
let iteration_2 = 0;
var hasPlayed_para = false;
var hasPlayed_h = false;

function randomText_para() {
    const str_para = para_text.split('').map((char, idx)=>{
        if(idx < iteration_1)
                return char;
        return chars.split("")[Math.floor(Math.random() * 52)]
    }).join('');

    para.textContent = str_para;

    iteration_1 += 0.5;
    // console.log(iteration_1);
}

function randomText_h() {
    const str_h = h_text.split('').map((char, idx)=>{
        if(idx < iteration_2)
                return char;
        return chars.split("")[Math.floor(Math.random() * 52)]
    }).join('')

    h1.textContent = str_h;

    iteration_2 += 0.2;
    // console.log(iteration_1);
}

para.addEventListener("mouseenter", ()=>{
    if(!hasPlayed_para){
        hasPlayed_para = true;
        var int = setInterval(randomText_para, 50);
    
        setTimeout(()=>{
            clearInterval(int);
        }, len_para * 52 * 2)
    }
})

h1.addEventListener("mouseenter", ()=>{
    if(!hasPlayed_h){
        hasPlayed_h = true;
        var int = setInterval(randomText_h, 50);
    
        setTimeout(()=>{
            clearInterval(int);
        }, len_h * 52 * 5)
    }
})

