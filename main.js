// Header scroll animation 

// document.body for Chrome, Safari, Opera
// document.documentElement for IE and Mozilla

let header = document.getElementById("header-container");

window.onscroll = () => {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        header.classList.add("header-scroll")
    } else {
        header.classList.remove("header-scroll")
    }
};  