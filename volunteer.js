/*
Requirements for JavaScript for the Code Louisville Front-End class
JavaScript Features List
Create a form (such as a ‘Contact Us’ form), validate at least one field (ex: email is in the correct format) and then use that information on your page somehow. For example, display it back to the user on button click, or change a setting on the page based on a section. Having a form that does nothing on clicking Submit or that just refreshes the page is not enough - you must capture the value(s) of the form and use it somehow.
Create a JavaScript function that performs some form of mathematical operation (calculates something) and displays the result on your page or otherwise uses that value to do something on the site.
Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page
Create a Javascript loop that dynamically displays HTML on your page - for example displaying a number of list items <li> based on how many times you loop
Create at least 3 variables (var, const, or let), set their values in JavaScript, and display the values somewhere on your page
Create one or more JavaScript objects (such as with multiple values contained in { }’s), modify at least one value of that object, and display it on your site
Show/hide one or more content areas or elements on your site through clicking a button or some other user interaction - must be done with some JavaScript code. 
Allow the user to rearrange or move items by clicking and dragging an element on your site
Other features can be added to this list with mentor or staff permission, but we want to see you stretch your skills, so you’ll want to pick something challenging.
Ask your mentors or staff if there’s something you want to do but doesn’t fit into these requirements. As long as it’s a good demonstration of your programming skills, it almost certainly will count!  Basically, we just want to see you do something interesting and challenging, so don’t let these requirements stifle your creativity!
*/

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

