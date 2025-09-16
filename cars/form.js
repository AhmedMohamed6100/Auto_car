// UP BUTTON
let up = document.querySelector("footer>a:last-of-type");

window.onscroll = function () {
    if (this.scrollY >= 50) up.classList.add("show");
    else up.classList.remove("show");
};
/////////////////////////////////////////////////////////////
const wrapper = document.querySelector(".wrapper");
const signupH1 = document.querySelector(".sign-up h1");
const loginH1 = document.querySelector(".login h1");

loginH1.addEventListener("click", () => {
    wrapper.classList.add("active");
});

signupH1.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

///////////////////////////////////////////////////
const wrapper2 = document.querySelector(".cont");
const openLogin = document.querySelector(".header-btn");
const closeLogin = document.querySelector(".wrapper span");

openLogin.addEventListener("click", () => {
    wrapper2.classList.add("display");
});

closeLogin.addEventListener("click", () => {
    wrapper2.classList.remove("display");
});
