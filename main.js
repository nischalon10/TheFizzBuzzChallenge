// Constants
const baseUrl = "http://basic-web.dev.avc.web.usf.edu/";

// Session Variables
let username = window.prompt("Username");
let url = baseUrl + username;
let num;
// HTML Elements
let value = document.getElementById("value");
document.getElementById("userID").innerText = username;

get(url).then(function (response) {
  console.log(response);
  if (response.status != 200) {
    post(url, { score: 0 }).then(function (response) {
      console.log(response);
      num = 0;
    });
  } else {
    num = response.data.score;
  }
  updateValue(num);
});

function next() {
  num += 1;
  fb(num);
  post(url, { score: num });
}

function updateValue(i) {
  value.textContent = i;
}

function fb(num) {
  if (num % 15 == 0) {
    updateValue("FizzBuzz");
  } else if (num % 3 == 0) {
    updateValue("Fizz");
  } else if (num % 5 == 0) {
    updateValue("Buzz");
  } else {
    updateValue(num);
  }
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
    http.onload = function () {
      resolve({ status: http.status, data: JSON.parse(http.response) });
    };
    http.open("POST", url);
    //Make sure that the server knows we're sending it json data.
    http.setRequestHeader("Content-Type", "application/json");
    http.send(data);
  });
}
