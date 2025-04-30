const progress = document.querySelector("#progress");
const fileInput = document.querySelector("#file");
const file = fileInput.files[0];

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("POST", " https://students.netoservices.ru/nestjs-backend/upload");
  xhr.upload.onprogress = (e) => {
    if (e.lenghtComputable) {
      const percent = e.loaded / e.total;
      progress.value = percent;
    }
  };

  xhr.onload = () => {
    progress.value = 1;
  };
  const formData = new FormData();
  formData.append("file", file);
  xhr.send(formData);
});
