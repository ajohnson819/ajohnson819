/*
Requirements for JavaScript for the Code Louisville Front-End class
JavaScript Features List
Create a form (such as a ‘Contact Us’ form), validate at least one field (ex: email is in the correct format) and then use that information on your page somehow. For example, display it back to the user on button click, or change a setting on the page based on a section. Having a form that does nothing on clicking Submit or that just refreshes the page is not enough - you must capture the value(s) of the form and use it somehow.
Create a JavaScript function that performs some form of mathematical operation (calculates something) and displays the result on your page or otherwise uses that value to do something on the site.
Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page
Create a Javascript loop that dynamically displays HTML on your page - for example displaying a number of list items <li> based on how many times you loop
Create at least 3 variables (var, let, or let), set their values in JavaScript, and display the values somewhere on your page
Create one or more JavaScript objects (such as with multiple values contained in { }’s), modify at least one value of that object, and display it on your site
Show/hide one or more content areas or elements on your site through clicking a button or some other user interaction - must be done with some JavaScript code. 
Allow the user to rearrange or move items by clicking and dragging an element on your site
Other features can be added to this list with mentor or staff permission, but we want to see you stretch your skills, so you’ll want to pick something challenging.
Ask your mentors or staff if there’s something you want to do but doesn’t fit into these requirements. As long as it’s a good demonstration of your programming skills, it almost certainly will count!  Basically, we just want to see you do something interesting and challenging, so don’t let these requirements stifle your creativity!
*/
/////heading button
let myHeader = document.getElementById("header");
let headingButton = document.getElementById("changeHeadingButton");
let myHeadingInput = document.getElementById("headingInput");

//querySelectors are dynamic and let is static
//const < let
//class = arrays
//buttons work better with buttons if you're doing click events

/*
puzzle: when I change the header to .header the event listener says it's null, but if I grab the whole tag, it works.
Why? Also, the heading Button doesn't work. I thought it was the quotations, but it wasn't that.
I thought it was the type of button, so I changed it type=button, then type=submit but that didn't work either.
So with a little help from Ryan Sallee, I realized why the event listener didn't work.
myHeader is already a variable, so I didn't a query selector or document. 
So that's why I wrote headingButton.addEventListner...etc.
*/
//style idea: selector first --> add event listner 
//DARK MODE BUTTON!!!!!!!!!!!!
//conside accessibility: will someone be able to get the info 
//accessibility audit 
headingButton.addEventListener('click', function(e) {
    //!!!!!So once let variable is made (lines 16-18)
    //!!!!!It becomes a global variable
    //any time you take an action with the (e)vent
    //there's many properties!! 
    //they're powerful in the translating abilities
    //it's associated with manipulating an element
    //e.g. onsubmit for forms
    //very important for form validation
    //or if an email address is valid, or a phone # is valid
    console.log(e.target);
    console.log('clicked');
    myHeader.style.color = myHeadingInput.value;
    myHeadingInput.style.value = ' ';
})


/////////////////////////////////////////////////////
//==================options forms====================
/////////////////////////////////////////////////////

let fillOutForm = document.querySelectorAll('.options');
let nameForm = document.querySelector('.nameInput');
let emailForm = document.querySelector('.emailInput');
let dateForm = document.querySelector('.datesInput');
let numberForm = document.querySelector('.numberInput');
/*
for (i = 0; i < fillOutForm.length; i++) {
    function populateForm(i) {
        let params = queryString[i].toQueryParams();
        Object.keys(params).forEach(function(key)) {
            Form.fillOutForm.setValue(`$(fill out form)[key], params[key]`)
        }
    }
}
*/

////////////////////list buttons//////////////////////
//---------------------------------------
//hide list button I replaced const (static) with let (dynamic)
let toggleListButton = document.getElementById('toggleList');
let listDiv = document.querySelector('.volunteerItemsDiv'); //the list

//the event listener for toggle button
toggleListButton.addEventListener('click', () => {
    if ( listDiv.style.display == 'none' ) {
        toggleList.textContent = 'Hide list'; 
        listDiv.style.display = 'block';
        //meaning if the list in shown in the code bock, the button should say 'hide list'
         
    } else {
        toggleList.textContent = 'Show list'
        listDiv.stlye.display = 'none'; 
    }
});
/*
toggleListButton.addEventListener('click', () => {
    p.innerHTML = input.value + ':';
})
*/ 
// the list description button where the user modifies the list name
let descriptionInput = document.querySelector('input.description');
let descriptionP = document.querySelector('p.description');
let descriptionButton = document.querySelector('button.description');

//the event listner assigned to the list description modifier
descriptionButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    descriptionP.innerHTML.descriptionInput.value + ':'
})

//add and remove buttons
let addItemButton = document.querySelector('button.addItemButton');
let addItemInput = document.querySelector('input.addItemInput');
let removeItemButton = document.querySelector('button.removeItemButton');

//the event listeners for adding/removing content
addItemButton.addEventListener('click', () => {
    let ul = document.createElement('ul')[0];
    let li = document.createElement('li');

    //text content selects the text we want to contain
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = ''
})

removeItemButton.addEventListener('click', () => {
    let ul = document.createElement('ul')[0];
    let li = document.querySelector('li:last-child');
    //text content selects the text we want to contain
    ul.removeChild(li);
    
}) 