async function fetchGallery() {
  try {
    const response = await fetch("../data/galleri.json");
    const gallery = await response.json();
    return gallery;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
const galleryData = await fetchGallery();

const app = {};

app.init = () => {
  const galleryPicContainer = document.querySelector(".galleryPic-container");

  const galleryTemp = (gallery) =>
    `
        <img src="${gallery.image}" class="galleryImage">
    `;

  const renderGallery = () => {
    galleryData.forEach((gallery) => {
      galleryPicContainer.insertAdjacentHTML("beforeend", galleryTemp(gallery));
    });
  };

  renderGallery();
};

app.init();
