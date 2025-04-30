const progress = document.querySelector("#progress");
const fileInput = document.querySelector("#file");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("POST", " https://students.netoservices.ru/nestjs-backend/upload");
  xhr.upload.onprogress = (e) => {
    progress.value = e.loaded / e.total;
  };

  const formData = new FormData();
  formData.append("file", file);
  xhr.send(formData);
});
