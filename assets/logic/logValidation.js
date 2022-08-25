import { logUn_email, logPw } from "./login_register.js";

function checkAccountExist() {
  const logForm = document.querySelector(".logForm");
  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest();
    const logFormData = new FormData(logForm);

    xhr.open("POST", "./assets/php/handlers/loginHandler.php");

    xhr.onreadystatechange = () => {
      // Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if (xhr.response === "found user") {
          resolve("Found User");
          return;
        }
        resolve("Not Found");
      }
    };

    xhr.send(logFormData);
  });
}

function showLoginError() {
  let errorElement = logPw.nextElementSibling;
  let logInputs = document.querySelectorAll(".logForm input");

  errorElement.innerText = "Username or Password is wrong";
  errorElement.style.display = "block";
  logInputs.forEach((input) => {
    input.classList.add("errorInput");
  });
}

export function submitLogin(e) {
  e.preventDefault();
  checkAccountExist().then((res) => {
    if (res === "Found User") {
      location.href = "index.php";
    } else {
      showLoginError();
    }
  });
}
