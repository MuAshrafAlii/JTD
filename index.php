<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/css/discussion.css" />
    <script src="./assets/logic/discussion.js" defer type="module"></script>
    <title>Discussion</title>
  </head>
  <body>
    <h1 class="title">What do you think of Technology?</h1>
    <div class="commentsContainer">
      <div class="cmntTitleContainer">
        <h3 class="cmntTitle">Comments</h3>
      </div>
      <div class="commentDetails">
        <div class="ppContainer">
          <img src="" alt="Img" class="pp" />
        </div>
        <div class="nameContainer">
          <h1 class="accName">Hamdy Kata</h1>
        </div>
        <div class="cmntContainer">
          <p class="cmnt" contenteditable="false">
          </p>
          <div class="checkImgContainer">
            <img src="./assets/imgs/check.png" alt="Check" class="checkImg">
          </div>
        </div>
        <div class="btnsContainer">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      </div>
    </div>

    <div class="currCmntContainer">
      <div class="imgContainer">
        <img src="" alt="Img" class="currImg" />
        <form class="uploadForm" enctype="multipart/form-data">
          <input type="file" name="imgUploaded" id="uploadInput" />
          <label for="uploadInput" class="uploadBtn">+</label>
        </form>
      </div>
      <div class="myCmntContainer">
        <form class="cmntForm">
          <input
            type="text"
            name="myCmnt"
            class="myCmntInput"
            placeholder="My Comment"
            required
          />
          <button type="submit" class="cmntBtn">Comment</button>
        </form>
      </div>
    </div>

    <div class="logoutContainer">
      <button class="logoutBtn">Log Out</button>
    </div>
  </body>
</html>
