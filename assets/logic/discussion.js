const uploadBtn = document.querySelector("#uploadInput"),
  uploadForm = document.querySelector(".uploadForm");

uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
uploadBtn.addEventListener("change", () => {
  handleImgUpload();
  uploadForm.requestSubmit();
});

function handleImgUpload() {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "./assets/php/handlers/imgUploadHandler.php");
  let formData = new FormData(uploadForm);

  xhr.onreadystatechange = () => {
    // Call a function when the state changes.
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let response = JSON.parse(xhr.response);
      if (response.length > 0) {
        alert(response[0]);
      }
    }
  };
  xhr.send(formData);
}
