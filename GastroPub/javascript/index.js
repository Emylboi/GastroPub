import { template } from "./templates.js";
import data from "./fetchData.js";

const stuffData = await data.fetchStuff();

const app = {};

app.init = () => {
  const gastroPubContainer = document.querySelector(".gastroPub-container");

  const renderStuff = () => {
    stuffData.forEach((stuff) => {
      gastroPubContainer.insertAdjacentHTML("beforeend", template(stuff));
    });
  };

  renderStuff();
};

app.init();
