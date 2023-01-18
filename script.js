
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let country = document.getElementById("country");
let score = document.getElementById("score");
let error = document.getElementById("error");
let bottom = document.getElementById("bottom");
let date = new Date().toLocaleString("en-US", {timeZone: 'Asia/Kolkata'});
date= new Date(date);
let currDate=date.toString().slice(0,21);
var counter = 0;
function add(){
    if(fname.value==""||lname.value==""||country.value ==""|| score.value==""){
        error.innerText = "All fields are required";
    }
    else{
        error.innerText="";
        bottom.innerHTML +=`
        <div class="card" id="card${counter}">
             <div class="name">
                 <p id="name">${fname.value.toUpperCase()+" "+lname.value.toUpperCase()}</p>
                 <p id="time">${currDate}</p>
             </div>
             <div class="countryName">
                 <p id="countryName">${country.value.toUpperCase()}</p>
             </div>
             <div class="playerScore">
                 <p class="player" id="playerScore${counter}">${score.value}</p>
             </div>
             <div class="button">
                 <button onclick="del(${counter})"><i class="fa-solid fa-trash-can"></i></button>
                 <button onclick="plus5(${counter})">+5</button>
                 <button onclick="minus5(${counter})">-5</button>
             </div>
        </div>`
        counter=counter+1;
        fname.value = "";
        lname.value = "";
        country.value = "";
        score.value = "";
    
    }

}
function del(counter){
    // console.log("hello");
    let delCard = document.getElementById(`card${counter}`);
    delCard.remove();
}
function plus5(counter){
    console.log("hello");
    let playerScore = document.getElementById(`playerScore${counter}`)
    playerScore.innerText = +playerScore.innerText+5 ;
}
function minus5(counter){
    console.log("hello");
    let playerScore = document.getElementById(`playerScore${counter}`)
    playerScore.innerText = +playerScore.innerText-5 ;
}
