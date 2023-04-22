document.addEventListener("DOMContentLoaded", () => {
  getCatPic();
  buttonClick();
  secondButtonClick();
});
const image = document.getElementById("cat-image");

const getCatPic = () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((json) => (image.src = json[0].url));
};

const buttonClick = () => {
  const button = document.querySelector(".btn-main");
  button.addEventListener("click", getCatPic);
};

const getPussyPic = () => {
  fetch("waylr.png")
    .then((response) => response.blob())
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      image.src = imageUrl;
    })
    .catch((error) => {
      console.error(`Error retrieving cat image: ${error}`);
    });
};

const secondButtonClick = () => {
  const buttonTwo = document.querySelector(".btn-sec");
  buttonTwo.addEventListener("click", getPussyPic);
};
