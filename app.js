const phoneLinksHolder = document.querySelector(".phone-links-holder");
const phoneLinks = document.querySelectorAll(".phone-links");

const menuBtn = document.querySelector(".menu");
let clicked = false;

menuBtn.addEventListener("click", () => {
    if (!clicked) {
        phoneLinksHolder.style.display = "flex";
        clicked = true;
    } else {
        phoneLinksHolder.style.display = "none";
        clicked = false;
    }
} );

phoneLinks.forEach((eachLink)=> {
    eachLink.addEventListener("click", ()=> {
        clicked = false;
        phoneLinksHolder.style.display = "none";
    });

});