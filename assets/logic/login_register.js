import * as regValidation from "./regValidation.js";
import * as logValidation from "./logValidation.js";

const inputs = document.querySelectorAll("input"),
  regForm = document.querySelector(".regForm"),
  logForm = document.querySelector(".logForm"),
  regSwitcher = document.querySelector(".regSwitcher"),
  logSwitcher = document.querySelector(".logSwitcher"),
  regUn = document.querySelector("#regUn"),
  regFn = document.querySelector("#regFn"),
  regLn = document.querySelector("#regLn"),
  regEmail1 = document.querySelector("#regEmail1"),
  regEmail2 = document.querySelector("#regEmail2"),
  regPw1 = document.querySelector("#regPw1"),
  regPw2 = document.querySelector("#regPw2");
export const logUn_email = document.querySelector("#logUn_email");
export const logPw = document.querySelector("#logPw");

/* FUNCTIONS */

export function showError(input, errorText, error) {
  errorText.innerText = error;
  if (error === undefined) {
    input.classList.remove("errorInput");
    input.classList.add("rightInput");
    errorText.style.display = "none";
  } else {
    input.classList.remove("rightInput");
    input.classList.add("errorInput");
    errorText.style.display = "block";
  }
}

function inputFocusInHandler(e) {
  const inputLabel = e.path[1].querySelector("label");
  if (!inputLabel.classList.contains("focused")) {
    inputLabel.classList.add("focused");
  }
}

function inputFocusOutHandler(e) {
  const inputLabel = e.path[1].querySelector("label");
  if (inputLabel.classList.contains("focused") && e.target.value === "") {
    inputLabel.classList.remove("focused");
  }
}

function logSwitcherHandler() {
  regForm.style.display = "none";
  logForm.style.display = "block";
  document.title = "JTD --- Login";
}

function regSwitcherHandler() {
  logForm.style.display = "none";
  regForm.style.display = "block";
  document.title = "JTD --- Register";
}

/* EVENTS */

inputs.forEach((input) => {
  input.addEventListener("focusin", inputFocusInHandler);
  input.addEventListener("focusout", inputFocusOutHandler);
});

regUn.addEventListener("focusout", regValidation.validateRegUn);
regFn.addEventListener("focusout", regValidation.validateRegFn);
regLn.addEventListener("focusout", regValidation.validateRegLn);
regEmail1.addEventListener("focusout", regValidation.validateRegEmail1);
regEmail2.addEventListener("focusout", regValidation.validateRegEmail2);
regPw1.addEventListener("focusout", regValidation.validateRegPw1);
regPw2.addEventListener("focusout", regValidation.validateRegPw2);

logSwitcher.addEventListener("click", logSwitcherHandler);
regSwitcher.addEventListener("click", regSwitcherHandler);

regForm.addEventListener("submit", regValidation.submitRegister);
logForm.addEventListener("submit", logValidation.submitLogin);
