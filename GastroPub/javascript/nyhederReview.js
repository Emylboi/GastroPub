
import { reviewTemp } from "./templates.js";
import data from "./fetchData.js";

const reviewData = await data.fetchReview();

const app = {};

app.init = () => {
  const reviewContainer = document.querySelector(".reviews-container");

  const renderReview = () => {
    reviewData.forEach((review) => {
      reviewContainer.insertAdjacentHTML("beforeend", reviewTemp(review));
    });
  };

  renderReview();
};

app.init();
