// Header scroll animation 

// document.body for Chrome, Safari, Opera
// document.documentElement for IE and Mozilla

let headerScroll = document.getElementById("header-container");
let headerNavBtn = document.getElementById("a.nav-button");



window.onscroll = () => {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        headerScroll.classList.add("header-scroll");
    } else {
        headerScroll.classList.remove("header-scroll");
    }
};  