const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const toggle = document.querySelector(".toggle");

loginBtn.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");

    toggle.classList.remove("signup-active");
});

signupBtn.addEventListener("click", () => {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");

    toggle.classList.add("signup-active");
});