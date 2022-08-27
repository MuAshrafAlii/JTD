import { showError } from "./login_register.js";
const regErrorsArray = {};

function chechUnTaken(un) {
  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "./assets/php/handlers/checkUnTakenHandler.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => {
      // Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if (xhr.response > 0) {
          resolve("taken");
          return;
        }
        resolve("Not Taken");
      }
    };

    xhr.send(`regUn=${un}`);
  });
}

function checkEmailTaken(email) {
  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "./assets/php/handlers/checkEmailTakenHandler.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => {
      // Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if (xhr.response > 0) {
          resolve("taken");
          return;
        }
        resolve("Not Taken");
      }
    };

    xhr.send(`regEmail=${email}`);
  });
}

function sendRegDataToServer() {
  const regForm = document.querySelector(".regForm");
  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest(),
      regFormData = new FormData(regForm);

    xhr.open("POST", "./assets/php/handlers/registerHandler.php");

    xhr.onreadystatechange = () => {
      // Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        resolve("Data Sent");
      }
    };

    xhr.send(regFormData);
  });
}

export async function validateRegUn() {
  let errorText = document.querySelector("#regUn ~ .error"),
    userName = regUn.value.trim(),
    checkUnTakenResult = await chechUnTaken(userName);

  if (userName === "") {
    regErrorsArray["regUnError"] = "Username Can't be empty";
    showError(regUn, errorText, regErrorsArray["regUnError"]);
    return;
  }

  if (!userName.match(/^[A-z0-9]+$/)) {
    regErrorsArray["regUnError"] =
      "Username Must be Alphanumeric Characters Only Without Spaces";
    showError(regUn, errorText, regErrorsArray["regUnError"]);
    return;
  }

  if (userName.length < 5 || userName.length > 25) {
    regErrorsArray["regUnError"] = "Username Must be between 5 & 25 Characters";
    showError(regUn, errorText, regErrorsArray["regUnError"]);
    return;
  }

  if (checkUnTakenResult === "taken") {
    regErrorsArray["regUnError"] = "This Username is Already Taken";

    showError(regUn, errorText, regErrorsArray["regUnError"]);
    return;
  }
  delete regErrorsArray["regUnError"];
  showError(regUn, errorText, regErrorsArray["regUnError"]);
}

export function validateRegFn() {
  let errorText = document.querySelector("#regFn ~ .error"),
    firstName = regFn.value.trim();

  if (firstName === "") {
    regErrorsArray["regFnError"] = "First Name Can't be empty";
    showError(regFn, errorText, regErrorsArray["regFnError"]);
    return;
  }

  if (!firstName.match(/^[A-z]+$/)) {
    regErrorsArray["regFnError"] =
      "First Name Must be Alphabetic Characters Only Without Spaces";
    showError(regFn, errorText, regErrorsArray["regFnError"]);
    return;
  }

  if (firstName.length < 2 || firstName.length > 30) {
    regErrorsArray["regFnError"] =
      "First Name Must be between 2 & 30 Characters";
    showError(regFn, errorText, regErrorsArray["regFnError"]);
    return;
  }
  delete regErrorsArray["regFnError"];
  showError(regFn, errorText, regErrorsArray["regFnError"]);
}

export function validateRegLn() {
  let errorText = document.querySelector("#regLn ~ .error"),
    lastName = regLn.value.trim();

  if (lastName === "") {
    regErrorsArray["regLnError"] = "Last Name Can't be empty";
    showError(regLn, errorText, regErrorsArray["regLnError"]);
    return;
  }

  if (!lastName.match(/^[A-z]+$/)) {
    regErrorsArray["regLnError"] =
      "Last Name Must be Alphabetic Characters Only Without Spaces";
    showError(regLn, errorText, regErrorsArray["regLnError"]);
    return;
  }

  if (lastName.length < 2 || lastName.length > 30) {
    regErrorsArray["regLnError"] =
      "Last Name Must be between 2 & 30 Characters";
    showError(regLn, errorText, regErrorsArray["regLnError"]);
    return;
  }
  delete regErrorsArray["regLnError"];
  showError(regLn, errorText, regErrorsArray["regLnError"]);
}

export async function validateRegEmail1() {
  let errorText = document.querySelector("#regEmail1 ~ .error"),
    emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    email1 = regEmail1.value.trim(),
    checkEmailTakenResult = await checkEmailTaken(email1);

  if (email1 === "") {
    regErrorsArray["regEmail1Error"] = "Email Can't be empty";
    showError(regEmail1, errorText, regErrorsArray["regEmail1Error"]);
    return;
  }

  if (!email1.match(emailRegEx)) {
    regErrorsArray["regEmail1Error"] = "Your Email is Invalid";
    showError(regEmail1, errorText, regErrorsArray["regEmail1Error"]);
    return;
  }

  if (checkEmailTakenResult === "taken") {
    regErrorsArray["regEmail1Error"] = "This Email is Already Taken";

    showError(regEmail1, errorText, regErrorsArray["regEmail1Error"]);
    return;
  }

  delete regErrorsArray["regEmail1Error"];
  showError(regEmail1, errorText, regErrorsArray["regEmail1Error"]);
}

export function validateRegEmail2() {
  let errorText = document.querySelector("#regEmail2 ~ .error"),
    email2 = regEmail2.value.trim(),
    email1 = regEmail1.value.trim();

  if (email1 !== email2) {
    regErrorsArray["regEmail2Error"] = "Emails submitted must be the same";
    showError(regEmail2, errorText, regErrorsArray["regEmail2Error"]);
    return;
  }

  delete regErrorsArray["regEmail2Error"];
  showError(regEmail2, errorText, regErrorsArray["regEmail2Error"]);
}

export function validateRegPw1() {
  let errorText = document.querySelector("#regPw1 ~ .error"),
    alphabeticRegEx = /[A-z]+/,
    numericRegEx = /[0-9]+/,
    specialRegEx = /[@$!%*#?&()]+/,
    pw1 = regPw1.value.trim();

  if (pw1 === "") {
    regErrorsArray["regPw1Error"] = "Password Can't be empty";
    showError(regPw1, errorText, regErrorsArray["regPw1Error"]);
    return;
  }

  if (
    !(
      alphabeticRegEx.test(pw1) &&
      numericRegEx.test(pw1) &&
      specialRegEx.test(pw1)
    )
  ) {
    regErrorsArray["regPw1Error"] =
      "Password Must Contain letters, numbers and special characters";
    showError(regPw1, errorText, regErrorsArray["regPw1Error"]);
    return;
  }

  if (pw1.length < 8) {
    regErrorsArray["regPw1Error"] = "Password must be atleast 8 characters";
    showError(regPw1, errorText, regErrorsArray["regPw1Error"]);
    return;
  }
  delete regErrorsArray["regPw1Error"];
  showError(regPw1, errorText, regErrorsArray["regPw1Error"]);
}

export function validateRegPw2() {
  let errorText = document.querySelector("#regPw2 ~ .error"),
    pw1 = regPw1.value.trim(),
    pw2 = regPw2.value.trim();

  if (pw1 !== pw2) {
    regErrorsArray["regPw2Error"] = "Passwords submitted must be the same";
    showError(regPw2, errorText, regErrorsArray["regPw2Error"]);
    return;
  }

  delete regErrorsArray["regPw2Error"];
  showError(regPw2, errorText, regErrorsArray["regPw2Error"]);
}

export function submitRegister(e) {
  e.preventDefault();

  validateRegUn();
  validateRegFn();
  validateRegLn();
  validateRegEmail1();
  validateRegEmail2();
  validateRegPw1();
  validateRegPw2();

  if (Object.keys(regErrorsArray).length === 0) {
    sendRegDataToServer().then((res) => {
      location.href = "index.php";
    });
  }
}
