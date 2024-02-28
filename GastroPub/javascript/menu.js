import { dishSoup, dishSalad, dishMainCourse } from "./templates.js";
import data from "./fetchData.js";

const soupData = await data.fetchSoup();
const saladData = await data.fetchSalad();
const mainCourseData = await data.fetchMainCourse();

const app = {};

app.init = () => {
  const soupContainer = document.querySelector(".soup-container");
  const saladContainer = document.querySelector(".salad-container");
  const mainCourseContainer = document.querySelector(".mainCourse-container");

  const renderSoup = () => {
    soupData.forEach((soup) => {
      soupContainer.insertAdjacentHTML("beforeend", dishSoup(soup));
    });
  };

  const renderSalad = () => {
    saladData.forEach((salad) => {
      saladContainer.insertAdjacentHTML("beforeend", dishSalad(salad));
    });
  };

  const renderMainCourse = () => {
    mainCourseData.forEach((mainCourse) => {
      mainCourseContainer.insertAdjacentHTML("beforeend", dishMainCourse(mainCourse));
    });
  };

  renderSoup();
  renderSalad();
  renderMainCourse();
};

app.init();
