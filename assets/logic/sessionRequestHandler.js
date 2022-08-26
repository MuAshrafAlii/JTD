export function checkUserLogged() {
  fetch("./assets/php/handlers/sessionHandler.php").then((res) =>
    res.text().then((res) => {
      if (res !== "user logged") {
        location = "login_register.php";
      }
    })
  );
}

export function logOut() {
  fetch("./assets/php/handlers/sessionHandler.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "logout=true",
  }).then((res) =>
    res.text().then(() => {
      location = "login_register.php";
    })
  );
}
