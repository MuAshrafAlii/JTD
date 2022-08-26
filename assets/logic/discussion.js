import { handleImgUpload, uploadBtn, uploadForm } from "./imageFormHandler.js";
import { checkUserLogged, logOut } from "./sessionRequestHandler.js";

const logOutBtn = document.querySelector(".logoutContainer"),
  cmntForm = document.querySelector(".cmntForm"),
  cmntInput = document.querySelector(".myCmntInput"),
  commentContainer = document.querySelector(".commentDetails"),
  outerCmntsContainer = document.querySelector(".commentsContainer"),
  currImg = document.querySelector(".currImg");
let oldCmnt;

checkUserLogged();
showComments();

/* Functions */

function submitCmntToServer(e) {
  let cmntFormData = new FormData(cmntForm);
  e.preventDefault();

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "./assets/php/handlers/addCmntHandler.php");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      cmntInput.value = "";
      showComments();
      location.reload();
    }
  };

  xhr.send(cmntFormData);
}

function getCmntsFromServer() {
  return fetch("./assets/php/handlers/showCmntsHandler.php").then((res) =>
    res.json().then((res) => {
      return res;
    })
  );
}

async function showComments() {
  let commentsAPI = await getCmntsFromServer(),
    currentUserId = commentsAPI[0].id;
  console.log("commentsAPI");
  currImg.src = commentsAPI[0].profile_pic;

  commentsAPI.forEach((comment) => {
    let newContainer = commentContainer.cloneNode(true),
      newProfilePic = newContainer.querySelector(".pp"),
      newName = newContainer.querySelector(".accName"),
      newCmnt = newContainer.querySelector(".cmnt");
    newContainer.style.display = "grid";

    if (comment.id === currentUserId) {
      newContainer.classList.add("curr");
    }

    newProfilePic.src = comment.profile_pic;
    newProfilePic.alt = comment.first_name + " " + comment.last_name;
    newProfilePic.title = comment.first_name + " " + comment.last_name;
    newName.innerText = comment.first_name + " " + comment.last_name;
    newCmnt.innerText = comment.comment;

    outerCmntsContainer.appendChild(newContainer);
  });
}

function editHandler(e) {
  if (e.target.classList.contains("edit")) {
    let cmntElement = e.path[2].querySelector(".cmnt");
    let checkImg = e.path[2].querySelector(".checkImgContainer");

    checkImg.style.display = "block";
    cmntElement.contentEditable = true;
    cmntElement.focus();
    oldCmnt = cmntElement.innerText;
  }
}

function submitEditHandler(e) {
  if (e.target.classList.contains("checkImg")) {
    let newcmnt;
    let cmntElement = e.path[3].querySelector(".cmnt"),
      checkImg = e.path[2].querySelector(".checkImgContainer");

    checkImg.style.display = "none";
    cmntElement.contentEditable = false;
    newcmnt = cmntElement.innerText;
    editCmntOnServer(oldCmnt, newcmnt);
  }
}

function editCmntOnServer(oldCmnt, newCmnt) {
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "./assets/php/handlers/editCmntHandler.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.send(`oldcmnt=${oldCmnt}&newCmnt=${newCmnt}`);
}

function deleteCommentFromServer(cmnt) {
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "./assets/php/handlers/deleteCmntHandler.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.send(`cmnt=${cmnt}`);
}

function deleteComment(e) {
  if (e.target.classList.contains("delete")) {
    let cmntContainer = e.path[2],
      cmnt = cmntContainer.querySelector(".cmnt"),
      assure = window.confirm("Are you sure you want to delete this comment?");

    if (assure) {
      deleteCommentFromServer(cmnt.innerText);
      cmntContainer.remove();
    }
  }
}

/* EVENTS */

logOutBtn.addEventListener("click", logOut);

uploadForm.addEventListener("submit", (e) => e.preventDefault());
uploadBtn.addEventListener("change", () => {
  handleImgUpload();
  uploadForm.requestSubmit();
});

document.addEventListener("click", editHandler); // Edit Btn Click Event Listener

document.addEventListener("click", submitEditHandler); // Submit edit event Listener
document.addEventListener("click", deleteComment); // Delete Btn Event Listner

cmntForm.addEventListener("submit", submitCmntToServer);
