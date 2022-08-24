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
  regPw2 = document.querySelector("#regPw2"),
  errorsArray = {};

/* FUNCTIONS */

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
        }
        resolve("Not Taken");
      }
    };

    xhr.send(`regUn=${un}`);
  });
}

async function regUnValidation(e) {
  let errorText = e.path[1].querySelector(".error");
  let checkUnTakenResult = await chechUnTaken(regUn.value);

  if (regUn.value === "") {
    errorsArray["regUnError"] = "Username Can't be empty";
    showError(e.target, errorText, errorsArray["regUnError"]);
    return;
  }

  if (!regUn.value.match(/^[A-z0-9]+$/)) {
    errorsArray["regUnError"] =
      "Username Must be Alphanumeric Characters Only Without Spaces";
    showError(e.target, errorText, errorsArray["regUnError"]);
    return;
  }

  if (regUn.value.length < 5 || regUn.value.length > 25) {
    errorsArray["regUnError"] = "Username Must be between 5 & 25 Characters";
    showError(e.target, errorText, errorsArray["regUnError"]);
    return;
  }

  if (checkUnTakenResult === "taken") {
    errorsArray["regUnError"] = "This Username is Already Taken";

    showError(e.target, errorText, errorsArray["regUnError"]);
    return;
  }
  delete errorsArray["regUnError"];
  showError(e.target, errorText, errorsArray["regUnError"]);
}

function showError(input, errorText, error) {
  errorText.innerText = error;
  if (error === undefined) {
    input.classList.remove("errorInput");
    errorText.style.display = "none";
  } else {
    input.classList.add("errorInput");
    errorText.style.display = "block";
  }
}

/* EVENTS */

inputs.forEach((input) => {
  input.addEventListener("focusin", inputFocusInHandler);
  input.addEventListener("focusout", inputFocusOutHandler);
});

regUn.addEventListener("focusout", regUnValidation);

logSwitcher.addEventListener("click", logSwitcherHandler);
regSwitcher.addEventListener("click", regSwitcherHandler);

regForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
