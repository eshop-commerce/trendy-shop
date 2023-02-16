let loginForm = document.getElementById("loginForm") as HTMLDivElement
let loginnBut = document.getElementById("login") as HTMLElement
let closeLogin = document.getElementById("closeLogin")!

function showLoginForm(){
    loginForm.style.display = "block"
    loginForm.style.display = "flex"
}

loginnBut.addEventListener("click", showLoginForm)

function closeLoginForm(){
    loginForm.style.display = "none"
}
closeLogin.addEventListener("click",closeLoginForm)

function login(){
    
}