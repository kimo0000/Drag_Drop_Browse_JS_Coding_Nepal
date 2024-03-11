const wrapper = document.querySelector(".wrapper"),
  spanTag = wrapper.querySelector(".download span"),
  imgTag = wrapper.querySelector("img"),
  inputFile = wrapper.querySelector('input[type="file"]'),
  btnBrowse = document.querySelector("button");

let file;

wrapper.addEventListener("dragover", (e) => {
  e.preventDefault();

  wrapper.classList.add("active");
  spanTag.innerText = "Piture Draged";
});

wrapper.addEventListener("dragleave", () => {
  wrapper.classList.remove("active");
  spanTag.innerText = "Piture Not Draged";
});

wrapper.addEventListener("drop", (e) => {
  e.preventDefault();

//   wrapper.innerHTML = "";

  file = e.dataTransfer.files[0];

  showFile();
});

btnBrowse.addEventListener("click", () => inputFile.click());
inputFile.addEventListener("change", (e) => {
  file = e.target.files[0];
  showFile();
});

function showFile() {
  wrapper.classList.add("active");
  let fileType = file.type;
  let ValidFiles = ["image/jpeg", "image/jpg", "image/png"];
  if (ValidFiles.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      let imgTag = `<img src="${fileReader.result}" alt="image">`;
      wrapper.innerHTML = imgTag;
    });
    fileReader.readAsDataURL(file);
  } else {
    alert("This is A Invalid File!");
    wrapper.classList.remove("active");
  }
}
