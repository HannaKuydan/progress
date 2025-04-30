const progress = document.querySelector("#progress");
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener("progress", (e) => {
    progress.value = e.loaded / e.total;
  });

  xhr.open("POST", " https://students.netoservices.ru/nestjs-backend/upload");
  const formData = new FormData();
  xhr.send(formData);
});
