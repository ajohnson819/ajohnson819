/*
===================BUTTONS=======================
*/

/////heading button
var myHeader = document.getElementById("header");
const headingButton = document.getElementById("changeHeadingButton");
let myHeadingInput = document.getElementById("headingInput");


headingButton.addEventListener('click', function(e) {
    myHeader.style.color = myHeadingInput.value;
    myHeadingInput.value = ' '; //don't use style noob   
})

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () => {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value; 
    toDoContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
    })
})

// Collect input from a user for the random number generator

lowestNumber = prompt("Please enter your lowest number in the range: ");
highestNumber = prompt("Please enter your highest number in the range");
lowestNumber = parseInt(lowestNumber);
highestNumber = parseInt(highestNumber);



if (lowestNumber && highestNumber) {
const random = Math.floor(Math.random()* (highestNumber - lowestNumber) + 1)+ lowestNumber;


alert(`${random} is your number from ${lowestNumber} to ${highestNumber}`);

} else {
  alert("Sorry, that was not a number, please enter two numbers");
}

/* attempt One
const textDragon = document.getElementById('textDragon');

        textDragon.onmousedown = function(e) {
            text.style.position = 'absolute'
            text.style.zIndex = 1000;
            document.body.append(textDragon);
            //I will make the functions for pageX and pageY after this line
            moveAt(e.pageX, e.pageY);
            
            //this will center the x and y axis
            function moveAt(pageX, pageY) {
                text.style.left = pageX - text.offsetWidth/2 + 'px';
                text.style.top = pageY - text.offsetHeight/2 + 'px';

            }
            function onmousemove(e) {
                moveAt(e.pageX, e.pageY);
            }
            document.addEventListener('mousemove', onmousemove);    
            textDragon.onmouseup = function() {
                document.removeEventListener('mousemove', onmousemove);
                text.onmouseup = null;
                };
            };
  Okay, let's try a ball instead of a text      
attempt two... */
let dragItem = document.querySelector("#dragBall");
        let container = document.querySelector("#dragonContainer");

        let active = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);
        container.addEventListener("touchmove", drag, false);

        container.addEventListener("mousedown", dragStart, false);
        container.addEventListener("mouseup", dragEnd, false);
        container.addEventListener("mousemove", drag, false);

        function dragStart(e) {
            if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
            } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            }

            if (e.target === dragItem) {
            active = true;
            }
        }

        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;

            active = false;
        }

        function drag(e) {
            if (active) {
            
            e.preventDefault();
            
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
            }
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        } 

//I propose a new element to the website: a way to log in someone's volunteer projects.
//The key then would be the person(first name and last name) and the amount of projects done. 