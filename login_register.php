<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/css/login_register.css" />

    <script src="./assets/logic/login_register.js" defer type="module"></script>
    <title>JTD - Register</title>
  </head>
  <body>
    <div class="formOuterContainer">
      <div class="formInnerContainer">
        <form class="regForm" style="display: none">
          <div class="inputContainer">
            <label for="regUn" class="inputLabel">Username</label>
            <input type="text" id="regUn" class="formInput" name="regUn" />
            <p class="error">This username is wrong</p>
          </div>
          <div class="inputContainer">
            <label for="regFn" class="inputLabel">First Name</label>
            <input type="text" id="regFn" class="formInput" name="regFn" />
            <p class="error">This username is wrong</p>
          </div>
          <div class="inputContainer">
            <label for="regLn" class="inputLabel">Last Name</label>
            <input type="text" id="regLn" class="formInput" name="regLn" />
            <p class="error">This username is wrong</p>
          </div>
          <div class="inputContainer">
            <label for="regEmail1" class="inputLabel">Email</label>
            <input
              type="email"
              id="regEmail1"
              class="formInput"
              name="regEmail1"
            />
            <p class="error">This username is wrong</p>
          </div>
          <div class="inputContainer">
            <label for="regEmail2" class="inputLabel">Confirm Email</label>
            <input
              type="email"
              id="regEmail2"
              class="formInput"
              name="regEmail2"
            />
            <p class="error">This username is wrong</p>
          </div>
          <div class="inputContainer">
            <label for="regPw1" class="inputLabel">Password</label>
            <input
              type="password"
              id="regPw1"
              class="formInput"
              name="regPw1"
            />
            <p class="error">This username is wrong</p>
          </div>
          <div class="inputContainer">
            <label for="regPw2" class="inputLabel">Confirm Password</label>
            <input
              type="password"
              id="regPw2"
              class="formInput"
              name="regPw2"
            />
            <p class="error">This username is wrong</p>
          </div>
          <div class="btnSwitcherContainer">
            <button type="submit" class="formBtn">Register</button>
            <p class="switcher">
              Have an Account? <span class="logSwitcher">Log In</span>
            </p>
          </div>
        </form>

        <form class="logForm">
          <div class="inputContainer">
            <label for="logUn_email" class="inputLabel"
              >Enter your Username Or Email</label
            >
            <input
              type="text"
              id="logUn_email"
              class="formInput"
              name="logUn_email"
            />
            <p class="error">This username is wrong</p>
          </div>

          <div class="inputContainer">
            <label for="logPw" class="inputLabel">Enter your Password</label>
            <input type="password" id="logPw" class="formInput" name="logPw" />
            <p class="error">This username is wrong</p>
          </div>
          <div class="btnSwitcherContainer">
            <button type="submit" class="formBtn">Log in</button>
            <p class="switcher">
              Don't Have an Account?
              <span class="regSwitcher">Register</span>
            </p>
          </div>
        </form>
      </div>
    </div>

    <div class="heroImgContainer">
      <img src="./assets/imgs/group.jpg" alt="Group" class="heroImg" />
    </div>
  </body>
</html>
