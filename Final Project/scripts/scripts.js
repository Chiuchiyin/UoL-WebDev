/*-------------------------------------------------------------------------------------------------------------*/
/*Asynchronously fetch a JSON file hosted on a web server to append the company name to the company logo-------*/
/*-------------------------------------------------------------------------------------------------------------*/

// Fetch the JSON file from a web server
fetch('https://api.npoint.io/21f53a237005a58f70b3')
    // Convert the JSON file into a Javascript object
    .then(function (response) {
        return response.json()
    })
    // Append the company name to the company logos based on the JS object information
    .then(function (dataJSON) {
        // Retrieve all of the company name templates from the DOM
        let companyName = document.querySelectorAll('.company-name-JSON');
        // Fill in the company name templates with 'Paldea Times' for each web page within the site structure
        for (var index = 0; index < companyName.length; ++index) {
            companyName[index].insertAdjacentHTML("beforeend",dataJSON.company)
        }
    })
    // Script would return undefined when it fails to catch the JSON
/*---------------------------------------------------------------------------------------------------*/
/*Enable a smooth scroll for the back to top button to reduce manual vertical scrolling--------------*/
/*---------------------------------------------------------------------------------------------------*/

// Retrieve the back to top button from the DOM
const scrollTopButton = document.querySelector('.back-to-top-button');
// Scroll the page back to top when the button is clicked
scrollTopButton.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        // Makes the user's scroll movement less jittery
        behavior: 'smooth'
    });
})

// Display the scroll button only when the page has been scrolled down past a fixed threshold
document.addEventListener('scroll', (event) => {
    // Display the scroll button only when the manual scrolling is considered less efficient
    if (window.pageYOffset < 500) {
        scrollTopButton.style.display = 'none';
    }
    else {
        // The button becomes visible when scrolled down past a fixed threshold relative to the top of the page
        scrollTopButton.style.display = 'block';
    }
})

/*---------------------------------------------------------------------------------------------------------------------*/
/*Toggle contrast button and preserve the settings---------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------*/

// storing user settings
let lowContrastMode = localStorage.getItem('lowContrastMode');

// look for 'toggle contrast' button from the DOM*/
const ContrastToggle = document.getElementById('low-contrast-toggle');

const enableLowContrastMode = () => {
    // Apply lower contrast colour-scheme to each page within the website
    document.body.classList.add('low-contrast-mode');
    // Keep track if lower contrast mode is selected
    localStorage.setItem('lowContrastMode', 'enabled');
}

const disableLowContrastMode = () => {
    // Revert to the default higher contrast colour-scheme to each web page within the website and keep track of the contrast preference
    document.body.classList.remove('low-contrast-mode');
    localStorage.setItem('lowContrastMode', 'disabled');
}

// Keep lower contrast mode from last session if it was activated before the page was closed
if (lowContrastMode === 'enabled') {
    enableLowContrastMode();
}

/* After 'Contrast Toggle' button is clicked, the site will change from higher contrast to lower contrast mode and vice versa */
ContrastToggle.addEventListener('click', () => {

    lowContrastMode = localStorage.getItem('lowContrastMode');

    // Set to lower contrast mode
    if (lowContrastMode === 'disabled') {
        enableLowContrastMode();
    }
    // Change back to the default higher contrast
    else {
        disableLowContrastMode();
    }
})

/*----------------------------------------------------------------------------------------------------------------*/
/*Toggle "wheelchair" button drop-down menu for accessibility features with the jQuery library--------------------*/
/*----------------------------------------------------------------------------------------------------------------*/

// Executes on button click
$(document).ready(function () {
    //dropdown menu to appear on click
    $('.accessibility-toggle').click(function () {
       $(this).next('.sub-menu').slideToggle(300);
    })
});

// Text legibility button
$('.dropdown-item').eq(0).click(function () {
    // Change the body section font to a more legible font (Arial)
    $('body').toggleClass('readability-mode');
})

/* This part of the code prevents the first user click remove all the already underlined links
Without this, the user would have to click the dropdown menu item twice to underline links*/
$('a').css('text-decoration', 'none');

// Underlines all links on the page
$('.dropdown-item').eq(1).click(function () {
    if ($('a').css('text-decoration-line') != 'underline') {
        $('a').css('text-decoration', 'underline');
    }
    // remove underlines on all links on the current page and revert to default state
    else {
        $('a').css('text-decoration', 'none');
    }
})

// apply grayscale filter on the webpage
$('.dropdown-item').eq(2).click(function () {
    // Change the current web page body to a grayscale colour scheme
    $('body').toggleClass('grayscale');
    // Apply a grayscale filter to every image within the current web page
    $('img').toggleClass('gray');
    // Apply a grayscale filter to every video within the current web page
    $('video').toggleClass('gray');
})

/*----------------------------------------------------------------------------------------------------------*/
/*Prevent accessibility buttons from scrolling back to top on user click by removing default behaviour------*/
/*----------------------------------------------------------------------------------------------------------*/

// Retrieve all the dropdown menu items from the DOM
const accessibilityIcons = document.querySelectorAll('.dropdown-item');

// Remove the default behaviour for each dropdown menu item
accessibilityIcons.forEach((icon) => {
    // Click events will no longer scroll back to the top of the page
    icon.addEventListener('click', (event) => {
        event.preventDefault();
        /* Toggle the background colour of the dropdown menu icon to indicate a whether an accessibility feature
        is currently selected or not*/
        icon.classList.toggle('changeOpacity');
    });
});

/*--------------------------------------------------------------------------------------------------*/
/*Toggle navigation menu visibility via the hamburger icon in mobile and tablet devices-------------*/
/*--------------------------------------------------------------------------------------------------*/

// Retrieve hamburger toggle button and navigation bar from the DOM
const button = document.querySelector('.toggle-button');
const navBarLinks = document.querySelector('.nav-bar-links');

// Navigation bar will appear when hamburger menu is toggled by the user
button.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

/*----------------------------------------------------------------------------------------------------*/
/*Stick the navigation bar on the top for accessible navigation---------------------------------------*/
/*----------------------------------------------------------------------------------------------------*/

// Sticky navigation bar permanently at the top of the webpage
window.addEventListener('scroll', () => {
    // Retrieve navigation menu from the DOM
    const navBar = document.querySelector('.nav-bar');
    // Retrieve 'Toggle Contrast' button from the DOM
    const contrastToggle = document.querySelector('.low-contrast-toggle');
    // Retrieve company logo from the DOM
    const companyLogo = document.querySelector('.company-logo-scroll');
    // Fix navigation menu to the top of the screen when a certain vertical scroll threshold is reached
    navBar.classList.toggle('sticky', window.scrollY > navBar.offsetTop);
    /* Position the 'Contrast Toggle' button */
    contrastToggle.classList.toggle('sticky-adjust', window.scrollY > navBar.offsetTop);
    /* Display the company logo in a white box in the top left corner of the fixed navigation menu*/
    companyLogo.classList.toggle('company-logo-scroll-active', window.scrollY > navBar.offsetTop);
})

/*----------------------------------------------------------------------------------------------------------*/
/*Prevent hamburger button and 'Contrast Toggle' button from redirecting the user to the top of the page----*/
/*----------------------------------------------------------------------------------------------------------*/

// Retrieve toggle button from the DOM
const hamburgerButton = document.getElementsByClassName('toggle-button')[0];
// Retrieve low contrast button from the DOM
const searchButton = document.getElementsByClassName('low-contrast-toggle')[0];
// Prevent the default behavior that returns the user to the top of the page whenever the hamburger button is clicked
hamburgerButton.addEventListener('click', (event) => {
    event.preventDefault();
})
/* Prevent the default behavior that returns the user to the top of the page whenever the 'Contrast Toggle' button
is clicked*/
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
})

/*-----------------------------------------------------------------------------------------------------*/
/*Timeline---------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------*/

// Retrieve timeline element from the DOM
const items = document.querySelectorAll(".timeline ul li");

// Check if timeline item is in view
function isElementInView(el){
    var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//This function would make timeline items appear by giving it in-view attribute
function callbackFunc() {
    for(var i = 0; i < items.length; i++){
        if (isElementInView(items[i])){
            if(!items[i].classList.contains("in-view")){
                items[i].classList.add("in-view");
            }
        } 
        else if(items[i].classList.contains("in-view")){
            items[i].classList.remove("in-view");
        }
    }
}

//Event Listeners
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
window.addEventListener("resize", callbackFunc);

/*-----------------------------------------------------------------------------------------------------*/
/*Filter function for "Raid Guide" page----------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------*/

// Retrieve filter button from the DOM
const filter = document.getElementById("filter-main-container");
const btns = filter.getElementsByClassName("filter-option");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


// Setting up our first filter function
filterPoke("all") //otherwise every "Poke" class wouldn't show
function filterPoke(c){
    var x, i;
    x = document.getElementsByClassName("Poke");
    if (c == 'all') c = "";
    for (i = 0; i< x.length; i++){
        removeItem(x[i], "show");
        if(x[i].className.indexOf(c) >-1) addItem(x[i], "show");
    }
}
// Creating the Add and Remove functions
function addItem(element, name){
    var i, var1, var2;
    var1 = element.className.split(" ");
    var2 = name.split(" ");
    for (i = 0; i < var2.length; i++){
        if (var1.indexOf(var2[i]) == -1){
            element.className += " " +var2[i];
        }
    }
}
function removeItem(element, name){
    var i, var1, var2;
    var1 = element.className.split(" ");
    var2 = name.split(" ");
    for (i = 0; i < var2.length; i++){
        while (var1.indexOf(var2[i]) > -1){
            var1.splice(var1.indexOf(var2[i]), 1);
        }
    }
    element.className = var1.join(" ");
}