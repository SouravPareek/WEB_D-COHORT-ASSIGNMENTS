var companies = [
    {
        Img : 'Assets/Amazon.png',
        Company : 'Amazon',
        Role : 'Senior UI/UX Designer',
        Posted : '5 days ago',
        Tags : ['Part-Time', 'Senior Level'],
        Pay :'$120/hr',
        Location : 'Mumbai, India'
    },
    {
        Img : 'Assets/Google.png',
        Company : 'Google',
        Role : 'Graphic Designer',
        Posted : '30 days ago',
        Tags : ['Part-Time', 'Flexible Schedule'],
        Pay :'$150-220k',
        Location : 'Kochi, India'
    },
    {
        Img : 'Assets/Dribbble.png',
        Company : 'Dribbble',
        Role : 'Senior Motion Designer',
        Posted : '18 days ago',
        Tags : ['Contract', 'Remote'],
        Pay :'$85/hr',
        Location : 'Chennai, India'
    },
    {
        Img : 'Assets/Figma.png',
        Company : 'Figma',
        Role : 'UX Designer',
        Posted : '5 days ago',
        Tags : ['Full-Time', 'In office'],
        Pay :'$220-250k',
        Location : 'Banglore, India'
    },
    {
        Img : 'Assets/Airbnb.png',
        Company : 'Airbnb',
        Role : 'Junior UI/UX Designer',
        Posted : '5 days ago',
        Tags : ['Contract', 'Remote'],
        Pay :'$100/hr',
        Location : 'Delhi, India'
    },
    {
        Img : 'Assets/Apple.png',
        Company : 'Apple',
        Role : 'Graphic Designer',
        Posted : '5 days ago',
        Tags : ['Full-Time', 'Flexible Schedule'],
        Pay :'$85-120k',
        Location : 'Kerala, India'
    },
    {
        Img : 'Assets/Microsoft.png',
        Company : 'Microsoft',
        Role : 'Product Designer',
        Posted : '12 days ago',
        Tags : ['Full-Time', 'Hybrid'],
        Pay : '$140-180k',
        Location : 'Hyderabad, India'
    },
    {
        Img : 'Assets/Spotify.png',
        Company : 'Spotify',
        Role : 'Visual Designer',
        Posted : '2 days ago',
        Tags : ['Part-Time', 'Remote'],
        Pay : '$70/hr',
        Location : 'Pune, India'
    },
    {
        Img : 'Assets/LinkedIn.png',
        Company : 'LinkedIn',
        Role : 'Senior UX Researcher',
        Posted : '10 days ago',
       Tags : ['Full-Time', 'Flexible Schedule'],
        Pay : '$160-200k',
        Location : 'Gurugram, India'
    },
    {
        Img : 'Assets/Adobe.png',
        Company : 'Adobe',
        Role : 'UI Designer',
        Posted : '7 days ago',
        Tags : ['Contract', 'In office'],
        Pay : '$90/hr',
        Location : 'Noida, India'
    }
];


var sum = '';

companies.forEach(function(elem){
    sum = sum + `<div class="card">
            <div class="save">Save<i class="ri-bookmark-line"></i></div>
            <div class="logo">
                <img src="${elem.Img}" alt="">
            </div>
            <h3>${elem.Company} <span>${elem.Posted}</span></h3>
            <h2>${elem.Role}</h2>
            <div class="tags">
                <p>${elem.Tags[0]}</p>
                <p>${elem.Tags[1]}</p>
            </div>
            <div class="line"></div>
            <div class="btm">
                <div class="pay">
                    <h2>${elem.Pay}</h2>
                    <p>${elem.Location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>`
})

var main = document.querySelector('main');

main.innerHTML = sum;

var saveBtns = document.querySelectorAll('.save');

saveBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        btn.innerHTML = 'Saved <i class="ri-bookmark-line"></i>';
        btn.style.backgroundColor = '#c7c4c4ff';
        btn.style.fontWeight = 700;
    });
});