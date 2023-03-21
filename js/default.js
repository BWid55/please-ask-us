document.addEventListener('focusin', function() {
    console.log('focused: ', document.activeElement)
  }, true);

const nav = document.querySelector("header nav");
const navLinks = document.querySelectorAll("header nav a");

if (window.innerWidth > 799) {
    nav.ariaHidden = "false"
    for (link of navLinks){
        link.tabIndex = 0;
    }
};

const toggleNavigation = (e) => {
    
};

document.querySelector("#mobile-navigation-button").addEventListener("click", toggleNavigation)