//This is the Javascript page 

// this function is to demonstrate my ability to show the time and date using js 
let showTime = new Date();

document.getElementById("showTime").innerHTML = showTime;

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

//this funct is to demonstrate a list being created by the user 
let volunteerItems-1 = [
  'A Rake',
  'Gardening Gloves',
  'A Shovel',
  'Cardboard Bags',
];

let volunteerItems-2 = [
  for (i = 0; i < 4; i++) {
    prompt("What item would you like to bring?");
  }
];


function createList(arr) {
  let items = '';
  for (i = 0; i < arr.length[i]; i++) {
    items += `<li>${arr[i]}</li>`
  }
  return items;
}


document.querySelector('.volunteer-items').innerHTML = `
<ol>
 ${createList(volunteerItems-1)}
</ol>
`;

document.querySelector('.volunteer-items-2').innerHTML = `
<ol>
 ${createList(volunteerItems2)}
</ol>
`;