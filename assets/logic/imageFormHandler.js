export const uploadBtn = document.querySelector("#uploadInput");
export const uploadForm = document.querySelector(".uploadForm");

export function handleImgUpload() {
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
      location.reload();
    }
  };
  xhr.send(formData);
}
