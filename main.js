// input = +prompt('enter a number');

// function evenOdd(){
// if (input%2===0){
//     console.log('even');
// }else{
//     console.log('odd');
// }


// }

// h = document.getElementById("type");
// console.log(h);
// h.style.display = ("none");
var body = document.getElementById("body");
var myBtn = document.getElementById("btn");
var h1 = document.getElementById("h1")
console.log(myBtn);

// console.log(myBtn);

// myBtn.addEventListener("click",myFunction);
// function myFunction() {
//     document.getElementById("btn").style.background = ('green');
// }


// myBtn.addEventListener("click", show);

// function show () {
//     h.style.display = ("block");

// }


myBtn.addEventListener("click", randomColor);

function randomColor () {
    let r = Math.floor(Math.random() * 254);
    let g = Math.floor(Math.random() * 254);
    let b = Math.floor(Math.random() * 254);

    let random = `rgb(${r}, ${g}, ${b})`;
    console.log(random);
    body.style.background = random;
    h1.innerText = random;

}