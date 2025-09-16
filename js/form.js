const wrapper5 = document.querySelector(".wrapper");
const signup = document.querySelector(".sign-up h1");
const loginH = document.querySelector(".login h1");

loginH.addEventListener('click', () => {
    wrapper5.classList.add("active");
});

signup.addEventListener("click", () => {
    wrapper5.classList.remove("active");
});
/////////////////////////////////////////////

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

////////////////////////////////////////////////////////
// UP BUTTON
let up = document.querySelector("footer>a:last-of-type");

window.onscroll = function () {
    if (this.scrollY >= 600) up.classList.add("show");
    else  up.classList.remove("show");
}
//////////////////////////////////////////////////////

// التبديل بين تسجيل الدخول والتسجيل
const wrapper = document.querySelector(".wrapper");
const signupH1 = document.querySelector(".sign-up h1");
const loginH1 = document.querySelector(".login h1");

loginH1.addEventListener('click', () => {
    wrapper.classList.add("active");
});

signupH1.addEventListener("click", () => {
    wrapper.classList.remove("active");
});
///////////////////////////////////////////////////////////////
// كود التسجيل
// كود التسجيل
let username = document.querySelector("#name1");
let email = document.querySelector("#mail1");
let password = document.querySelector("#pass1");
let register_btn = document.querySelector("#sign_up");

register_btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Please fill all fields.");
    } else {
        // تخزين بيانات المستخدم في LocalStorage
        localStorage.setItem("username", username.value.trim());
        localStorage.setItem("email", email.value.trim());
        localStorage.setItem("password", password.value);

        // مسح الحقول بعد التسجيل
        username.value = "";
        email.value = "";
        password.value = "";

        // عرض رسالة نجاح والتبديل إلى نموذج تسجيل الدخول
        alert("Registration successful! Please log in now.");
        wrapper.classList.add("active"); // التبديل إلى واجهة تسجيل الدخول
    }
});

// كود تسجيل الدخول
let mailInput = document.querySelector("#mail");
let passInput = document.querySelector("#pass");
let loginBtn = document.querySelector("#sign_in");

// جلب البيانات المخزنة
let storedEmail = localStorage.getItem("email");
let storedPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (mailInput.value === "" || passInput.value === "") {
        alert("Please fill all fields.");
    } else {
        // التحقق من البيانات
        if (
            storedEmail &&
            storedEmail.trim() === mailInput.value.trim() &&
            storedPassword &&
            storedPassword === passInput.value
        ) {
            alert("Login successful! Redirecting to the dashboard...");
            setTimeout(() => {
                window.location = "index.html"; // صفحة الوجهة بعد تسجيل الدخول
            }, 1500);
        } else {
            alert("Incorrect email or password.");
        }
    }
});

// عرض أو إخفاء النماذج (زر الفتح والإغلاق)
const wrapper3 = document.querySelector(".cont");
const openLogin1 = document.querySelector(".header-btn");
const closeLogin1 = document.querySelector(".wrapper span");

openLogin1.addEventListener("click", () => {
    wrapper3.classList.add("display");
});

closeLogin1.addEventListener("click", () => {
    wrapper3.classList.remove("display");
});

// زر العودة إلى الأعلى
let upp = document.querySelector("footer>a:last-of-type");

window.onscroll = function () {
    if (this.scrollY >= 600) upp.classList.add("show");
    else upp.classList.remove("show");
};
//////////////////////////////
