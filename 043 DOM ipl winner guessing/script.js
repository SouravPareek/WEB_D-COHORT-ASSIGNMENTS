var arr = [
  {
    team: "CSK",
    primary: "#FFF100",
    secondary: "#213A82",
    // tertiary: "#E9530D",
    trophies: '🏆🏆🏆🏆🏆',
    FullName: "Chennai Super Kings",
    src: "assets/CSK.png",
  },
  {
    team: "MI",
    primary: "#004B8D",
    secondary: "#FFD141",
    // tertiary: "#E1261C",
    trophies: '🏆🏆🏆🏆🏆',
    FullName: "Mumbai Indians",
    src: "assets/MI.png",
  },
  {
    team: "KKR",
    primary: "#4B0082",
    secondary: "#D4AF37",
    // tertiary: "#000000",
    trophies: '🏆🏆🏆',
    FullName: "Kolkata Knight Riders",
    src: "assets/KKR.png",
  },
  {
    team: "RCB",
    primary: "#CC1213",
    secondary: "#D7BA67",
    // tertiary: "#000000",
    trophies: '🏆',
    FullName: "Royal Challengers Bengaluru",
    src: "assets/RCB.png",
  },
  {
    team: "GT",
    primary: "#1B2133",
    secondary: "#DEC16F",
    // tertiary: "#FFFFFF",
    trophies: '🏆',
    FullName: "Gujarat Titans",
    src: "assets/GT.png",
  },
  {
    team: "SRH",
    primary: "#FF6600",
    // tertiary: "#000000",
    secondary: "#FCCB11",
    trophies: '🏆',
    FullName: "Sunrisers Hyderabad",
    src: "assets/SRH.png",
  },
  {
    team: "PBKS",
    primary: "#DD1F2D",
    secondary: "#F0D2A4",
    // tertiary: "#132564",
    trophies: '0',
    FullName: "Punjab Kings",
    src: "assets/PBKS.png",
  },
  {
    team: "DC",
    primary: "#132564",
    secondary: "#D71822",
    // tertiary: "#FFFFFF",
    trophies: '0',
    FullName: "Delhi Capitals",
    src: "assets/DC.png",
  },
  {
    team: "RR",
    primary: "#DF068E",
    // tertiary: "#FFFFFF",
    secondary: "#0A1E85",
    trophies: '🏆',
    FullName: "Rajasthan Royals",
    src: "assets/RR.png",
  },
  {
    team: "LSG",
    primary: "#2B3087",
    // tertiary: "#E30613",
    secondary: "#77B926",
    trophies: '0',
    FullName: "Lucknow Super Giants",
    src: "assets/LSG.png",
  }
];

var btn = document.querySelector('button');
var img = document.querySelector('#team img');
var main = document.querySelector('main');
var details = document.querySelector('#details');
var teamName = document.querySelector('#details #team-name');
var trophies = document.querySelector('#details #trophies');

btn.addEventListener('click', function(){
    var team = arr[Math.floor(Math.random()*arr.length)];
    img.src = team.src;
    main.style.backgroundColor = team.primary;
    // details.style.backgroundColor = team.tertiary;
    teamName.innerHTML = team.FullName;
    teamName.style.color = team.secondary;
    trophies.innerHTML = team.trophies;
})