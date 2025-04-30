const progress = document.querySelector("#progress");
const fileInput = document.querySelector("#file");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    xhr.upload.onprogress = (e) => {
      progress.value = e.loaded / e.total;
    };
  });
  
  xhr.open("POST", " https://students.netoservices.ru/nestjs-backend/upload");
  const formData = new FormData();
  xhr.send(formData);
});
