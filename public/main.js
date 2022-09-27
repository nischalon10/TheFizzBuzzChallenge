let Url = "http://basic-web.dev.avc.web.usf.edu/";

let form = document.getElementById("loginForm");
function handleForm(e){ e.preventDefault(); }
form.addEventListener('submit',handleForm);

function call(){
  let username =  document.getElementById("username").value.trim();
  let userUrl = Url + username;
  get(userUrl).then(function(response){
    console.log(response);
    if (response.status != 200){
      // post(Url,{score : 0})
    }
  });
  window.location.assign("./app/app.html");
}


function get(url) {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.onload = function () {
      resolve({ status: http.status, data: JSON.parse(http.response) });
    };
    http.open("GET", url);
    http.send();
  });
}

function post(url, data) {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.onload = function() {
      resolve({ status: http.status, data: JSON.parse(http.response) });
    };
    http.open("POST", url);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(data);
  });
}