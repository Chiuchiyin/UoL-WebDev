/*------------------------------------------------------------------------------------------------------*/
/*Enable buttons to rotate through the 'Breaking News' slides on the carousel of the Home Page----------*/
/*------------------------------------------------------------------------------------------------------*/

// Retrieve the two carousel scrollers from the DOM
const scrollers = document.querySelectorAll('[data-scroller]');

// For each carousel scroller, move to the next or previous slide
scrollers.forEach(scroller => {
    scroller.addEventListener('click', () => {
        // Select all of the carousel slides
        const slides = document.querySelector('[data-slides]');
        // Record the number of carousel slides
        const numSlides = slides.children.length;
        // Determine whether or not to move to next or previous slide
        const offset = scroller.dataset.carouselScroller === 'previous' ? -1 : 1;
        // Retrieve currently visible slide from the DOM
        const visibleSlide = slides.querySelector('[data-visible]');
        // Determine which slide to display by moving forwards or backwards from the currently visible slide
        let newSlide = offset + [...slides.children].indexOf(visibleSlide);
        // Allow carousel to loop through the slides continuously
        newSlide = newSlide < 0 ? numSlides - 1 : newSlide % numSlides;
        // Make new slide visible
        slides.children[newSlide].dataset.visible = true;
        // Hide the old slide so that a maximum of one slide is displayed at any one instance
        delete visibleSlide.dataset.visible;
    })
})

/*-----------------------------------------------------------------------------------------------------------*/
/*Add an effect that fades in and slides in elements once they are sufficiently visible in the viewport------*/
/*-----------------------------------------------------------------------------------------------------------*/

//Retrieve all fade-in elements from the DOM
const fadeInElements = document.querySelectorAll('.fade-in-effect');

const appearOptions = {
    /* The visibility of an element is determined relative to viewport
    This will be used to determine when the element should be faded in */
    root: null,
    // Fade in occurs once the element has been scrolled into view
    rootMargin: '0px 0px -165px 0px',
    threshold: 0
};

// Observer starts to fade in elements that intersect with the viewport
const intersectionObserver = new IntersectionObserver((entries, intersectionObserver) => {
    entries.forEach(entry => {
        // Apply effect only to elements that overlap with the viewport on page load
        if (entry.isIntersecting) {
            // Make the element visible
            entry.target.classList.add('appear');
            // Ignore the target element after it has been faded in to avoid repeated fade in effects
            intersectionObserver.unobserve(entry.target);
        }
        // Ignore element do not intersect with the viewport on page load
        else {
            return;
        }
    });
},
    appearOptions);

/* Intersection observer determines the relationship of each element to the viewport to determine if it should be
faded in or not */
fadeInElements.forEach(element => {
    intersectionObserver.observe(element);
});

// Add a smooth slide in effect to elements once they are sufficiently visible in the viewport
// Retrieve all slide in elements from the DOM
const slideInElements = document.querySelectorAll('.slide-in-effect');

// Apply a slide in effect to each element
slideInElements.forEach(element => {
    intersectionObserver.observe(element);
})

/*-------------------------------------------------------------------------------------------------------------*/
/*Asynchronously fetch a JSON file hosted on a web server to append the company name to the company logo-------*/
/*-------------------------------------------------------------------------------------------------------------*/

// Fetch the JSON file from a web server
fetch('https://json.extendsclass.com/bin/b6f57e7ba631')
    // Convert the JSON file into a Javascript object
    .then(function (response) {
        return response.json()
    })
    // Append the company name to the company logos based on the JS object information
    .then(function (dataJSON) {
        // Retrieve all of the company name templates from the DOM
        let companyName = document.querySelectorAll('.company-name-JSON');
        // Fill in the company name templates with 'Chess News' for each web page within the site structure
        for (var index = 0; index < companyName.length; ++index) {
            companyName[index].insertAdjacentHTML("beforeend",dataJSON.company)
        }
    })
    // Display an error message if the JSON file cannot be parsed or if there is a network error
    .catch(function (error) {
        console.error('Error: JSON file could not be parsed or network error encountered.')
        console.error(error);
    });

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
    if (window.pageYOffset < 400) {
        scrollTopButton.style.display = 'none';
    }
    else {
        // The button becomes visible when scrolled down past a fixed threshold relative to the top of the page
        scrollTopButton.style.display = 'block';
    }
})

/*----------------------------------------------------------------------------------------------------------------------------------*/
/*Enable the user to toggle low contrast mode from the default high contrast mode and preserve settings between browser sessions----*/
/*----------------------------------------------------------------------------------------------------------------------------------*/

// User settings are stored, meaning that the user's contrast preferences are preserved across browser sessions
let lowContrastMode = localStorage.getItem('lowContrastMode');

// Retrieve the low contrast mode toggle button from the DOM*/
const lowContrastToggle = document.getElementById('low-contrast-toggle');

const enableLowContrastMode = () => {
    // Apply a low contrast color scheme to each web page within the site structure
    document.body.classList.add('low-contrast-mode');
    // Keep track of the state of the contrast preference: low contrast mode
    localStorage.setItem('lowContrastMode', 'enabled');
}

const disableLowContrastMode = () => {
    // Revert to the default high contrast color scheme to each web page within the site structure
    document.body.classList.remove('low-contrast-mode');
    // Keep track of the state of the contrast preference: high contrast mode
    localStorage.setItem('lowContrastMode', 'disabled');
}

// Preserve low contrast mode from last user session if it was enabled before the page was closed
if (lowContrastMode === 'enabled') {
    enableLowContrastMode();
}

/* When the user clicks on the 'Contrast Toggle' button, the website will shift from high contrast to low contrast
mode and vice versa */
lowContrastToggle.addEventListener('click', () => {

    /* The state of the contrast preferences has to be updated, since by default, the preferenaces are only checked
    when the page is loaded
    Without this update, the page could not be toggled back to the default high contrast mode after the user
    toggled low contrast mode to be on */
    lowContrastMode = localStorage.getItem('lowContrastMode');

    // Enable low contrast mode
    if (lowContrastMode === 'disabled') {
        enableLowContrastMode();
    }
    // Revert to the high contrast default mode
    else {
        disableLowContrastMode();
    }
})

/*----------------------------------------------------------------------------------------------------------------*/
/*Allow the wheelchair icon to toggle dropdown menu to provide accessibility features using the jQuery library----*/
/*----------------------------------------------------------------------------------------------------------------*/

// Executes when the DOM is registered by the browser
$(document).ready(function () {
    // Enable the dropdown menu to appear
    $('.accessibility-toggle').click(function () {
        // Smoothly open and close dropdown menu when the wheelchair icon is toggled
        $(this).next('.sub-menu').slideToggle(300);
    })
});

// Apply text readibility improvements to the current page
$('.dropdown-item').eq(0).click(function () {
    // Change the body section font to a legible font (Arial)
    $('body').toggleClass('readability-mode');
})

/* This prevents the first user click from removing all underlines
Without this, the user would have to click the dropdown menu item twice to underline links*/
$('a').css('text-decoration', 'none');

// Add underlines to all hyperlinks on the current page
$('.dropdown-item').eq(1).click(function () {
    if ($('a').css('text-decoration-line') != 'underline') {
        $('a').css('text-decoration', 'underline');
    }
    // Revert to default state by removing underlines to all links on the current page
    else {
        $('a').css('text-decoration', 'none');
    }
})

// Make all colors shades of grey
$('.dropdown-item').eq(2).click(function () {
    // Change the current web page's body to a grayscale color scheme
    $('body').toggleClass('grayscale');
    // Apply a grayscale filter to every image within the current web page
    $('img').toggleClass('gray');
    /* Apply a grayscale filter to the background images for the containers with overlapping columns on the
    'Contact Us' page */
    $('section').toggleClass('gray');
    // Apply a grayscale filter to the embedded Google Maps at the bottom of the 'Contact Us' page
    $('iframe').toggleClass('gray');
    // Apply a grayscale filter to the main banner above the fold of the 'Contact Us' page
    $('.contact-header').toggleClass('gray');
    /* Apply a grayscale filter on the two background images for the grid layout with white text and icon overlay on
    the 'About Us' Page*/
    $('.single-background').toggleClass('gray');
})

/*--------------------------------------------------------------------------------------------------------------------------*/
/*Enable the button in the 'More News' sidebar section of the 'Current News' page to toggle the amount of text displayed----*/
/*--------------------------------------------------------------------------------------------------------------------------*/

// Retrieve the button in the 'More News' sidebar section from the DOM
let showMoreTextButton = document.getElementsByClassName('text-display-toggle-button')[0];
// This text display toggling functionality is only appled to the 'Current News' page
if (showMoreTextButton != null) {
    // Toggle the amount of text displayed within each of the articles in the 'More News' sidebar section*/
    showMoreTextButton.addEventListener('click', function () { toggleTextDisplay() });
}

/* When the button in the 'More News' section is clicked, the amount of text displayed in the sidebar section either
increases or decreases */
function toggleTextDisplay() {
    // Retrieve the ellipsis (three-dots) from the DOM
    let ellipsis = document.getElementsByClassName('ellipsis');
    // Retrieve the text that will be displayed or hidden based on the state of a button from the DOM
    let showMoreText = document.getElementsByClassName('show-more-text');
    // Retrieve the button that determines the amount of textual content displayed from the DOM
    let showMoreTextButton = document.getElementsByClassName('text-display-toggle-button')[0];

    // Provide the option for the user to toggle a button that displays more detailed text
    if (ellipsis[0].style.display === 'none') {
        showMoreTextButton.innerHTML = 'Show More';
    }
    // Provide the option for the user to toggle a button that reduces the amount of text in the 'More News' section
    else {
        showMoreTextButton.innerHTML = 'Show Less';
    }

    // Iterate through each ellipsis and text section and either show or hide the elements*/
    for (let index = 0, len = ellipsis.length; index < len; ++index) {
        // Reduce the amount of text displayed and display the ellipsis
        if (ellipsis[index].style.display === 'none') {
            showMoreText[index].style.display = 'none';
            ellipsis[index].style.display = 'inline';
        }
        // Increase the amount of text displayed and hide the ellipsis
        else {
            showMoreText[index].style.display = 'inline';
            ellipsis[index].style.display = 'none';
        }
    }
}

/*----------------------------------------------------------------------------------------------------------*/
/*Enable the accordion windows on the 'About Us' page to expand and collapse when toggled by the user-------*/
/*----------------------------------------------------------------------------------------------------------*/

// Retrieve the accordion headers from the DOM
let accordionHeader = document.querySelectorAll(".accordion-header");;

// Expand/collapse the accordion window toggled by the user
for (index = 0; index < accordionHeader.length; index++) {
    accordionHeader[index].addEventListener("click", function () {
        var accordion = this.nextElementSibling;
        // Toggle the selected indicator to either indicate an expanded window, or a collapsed window
        this.classList.toggle('active-accordion-header');
        // Toggle the display of the clicked accordion window. Collapse if originally expanded, and vice versa.
        if (accordion.style.display != 'block') {
            accordion.style.display = 'block';
        } else {
            accordion.style.display = 'none';
        }
        // Accordion window is collapsed. Remove space allocated to the accordion window
        if (accordion.style.display === 'none') {
            accordion.style.maxHeight = null;
            // Allocate the proper amount of space for the text in the expanded accordion window
        } else {
            accordion.style.maxHeight = accordion.scrollHeight + 'px';
        }
    });
}

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
        /* Toggle the background color of the dropdown menu icon to indicate a whether an accessibility feature
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

/*--------------------------------------------------------------------*/
/*Create a sticky navigation bar for accessible navigation------------*/
/*--------------------------------------------------------------------*/

// Sticky navigation bar allows accessible page navigation without the user having to scroll to the top
window.addEventListener('scroll', () => {
    // Retrieve the navigation menu from the DOM
    const navBar = document.querySelector('.nav-bar');
    // Retrieve the 'Toggle Contrast' button from the DOM
    const contrastToggle = document.querySelector('.low-contrast-toggle');
    // Retrieve the company logo (composed of two chess pieces) from the DOM
    const companyLogo = document.querySelector('.company-logo-scroll');
    // Compute the distance from the top of the page
    let offsetTop = navBar.offsetTop;
    // Make navigation menu fixed to the top of the screen when a certain vertical scroll threshold is reached
    navBar.classList.toggle('sticky', window.scrollY > navBar.offsetTop);
    /* Position the 'Contrast Toggle' button relative to the dimensions of the fixed navigation menu when the
    the vertical scroll bar passes a threshold */
    contrastToggle.classList.toggle('sticky-adjust', window.scrollY > navBar.offsetTop);
    /* Display the company logo in a white box in the top left corner of the fixed navigation menu when a
    vertical scroll threshold is reached */
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
/*Prevent the social media icons aside on the 'Current News' page from colliding with the footer-------*/
/*-----------------------------------------------------------------------------------------------------*/

//  Retrieve the social media icons aside from the DOM
const fixedSocialMediaAside = document.querySelector('.fixed-social-media-icons');
/*  Record the starting vertical scroll position (position of 0 is not used or else unexpected behaviour occurs when the
    page is scrolled to the top */
let pastScrollPosition = -1;
// Show or hide the aside based on changes in the user's scroll position for the 'Current News' page only
if (fixedSocialMediaAside != null) {
    document.addEventListener('scroll', (event) => {
        let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        // Hide the social media icons aside to prevent collision with the footer
        if (currentScrollPosition > pastScrollPosition && window.pageYOffset > 5200) {
            fixedSocialMediaAside.style.display = 'none';
        }
        else {
            // Make the aside visible once collision with the footer will not occur
            fixedSocialMediaAside.style.display = 'block';
        }
    })
}