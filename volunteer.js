//This is the Javascript page 

// this function is to demonstrate my ability to show the time and date using js 
let showTime = new Date();

document.getElementById("showTime").innerHTML = showTime;
/*
let html = '';
const randomColor = () => Math.floor(Math.random() * 256) ;

function randomRGB(value) {
  const color = `rgb(${value()}, ${value()},${value()})`;
  return color;
}

for (let i = 1; i <= 10; i++) {
  html += `<div style="background-color: ${randomRGB(randomColor)}">${i}</div>`;
}
document.querySelector('main').innerHTML = html;
*/

//this funct is to demonstrate a list being created by the user 

function createList(arr) {
  let items = '';
  for (i = 0; i < arr.length[i]; i++) {
    items += `<li>${volunteerItems[i]}</li>`
  }
  return items;
}


///////////////////////////////////////////
/* functions that call, manipulate and listen */
///////////////////////////////////////////

const myHeader = document.getElementsByClassName('header');

myHeader.addEventListener('click', () => {
  myHeader.style.color = 'pink';
});

