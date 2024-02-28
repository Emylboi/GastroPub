import { galleryTemp } from "./templates.js";
import data from "./fetchData.js";

const galleryData = await data.fetchGallery();

const app = {};

app.init = () => {
  let galleryPicContainer = document.querySelector(".galleryPic-container");

  const renderGallery = () => {
    galleryData.forEach((gallery) => {
      galleryPicContainer.insertAdjacentHTML("beforeend", galleryTemp(gallery));
    });
  };

  renderGallery();
};

app.init();
