let form = document.getElementById("loginForm");
function handleForm(e){e.preventDefault();}
form.addEventListener('submit',handleForm);

let username="";

function login(){
  username = document.getElementById("username").value.trim();
  sessionStorage.setItem("username",username);
  window.location.assign("./app/app.html");
}