const btnLogin = document.querySelector('#btnLogin');
const btnBack = document.querySelector('#btnBack');

btnLogin.addEventListener("click", () => {
    window.location = "../login/login.html";
})

btnBack.addEventListener("click", () => {
    window.location = "../cake/cake.html";
})