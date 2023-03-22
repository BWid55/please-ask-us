document.onkeydown = function (e) {
    if( e.key == "Tab" ){
        document.querySelector("#focus").textContent = "*:focus{outline:0.4rem solid red;}"
    }
};

const navButton = document.querySelector("header button")
const navButtonImg = document.querySelector("header button img")
const nav = document.querySelector("header nav");
const navLinks = document.querySelectorAll("header nav a");

if (window.innerWidth > 799) {
    navButton.ariaHidden = "true";
    nav.ariaHidden = "false";
    for (link of navLinks){
        link.tabIndex = 0;
    };
};

navButton.addEventListener("click", () => {
    if (navButton.ariaExpanded === "false"){
        navButton.ariaExpanded = "true";
        navButtonImg.alt = "Close mobile navigation";
        nav.ariaHidden = "false";
        navLinks.forEach(link => link.tabIndex = 0)
    } else {
        navButton.ariaExpanded = "false";
        navButtonImg.alt = "Open mobile navigation";
        nav.ariaHidden = "true";
        navLinks.forEach(link => link.tabIndex = -1)
    }
});