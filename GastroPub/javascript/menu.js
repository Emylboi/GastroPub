async function fetchSoup() {
  try {
    const response = await fetch("../data/supper.json");
    const soup = await response.json();
    return soup;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
const soupData = await fetchSoup();

async function fetchSalad() {
  try {
    const response = await fetch("../data/salater.json");
    const salad = await response.json();
    return salad;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
const saladData = await fetchSalad();

async function fetchMainCourse() {
  try {
    const response = await fetch("../data/hovedretter.json");
    const mainCourse = await response.json();
    return mainCourse;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
const mainCourseData = await fetchMainCourse();

const app = {};

app.init = () => {
  const soupContainer = document.querySelector(".soup-container");
  const saladContainer = document.querySelector(".salad-container");
  const mainCourseContainer = document.querySelector(".mainCourse-container");

  const dishSoup = (soup) =>
    `
        <div class="dish-container">
            <div>
              <h1>${soup.dish}</h1>
              <p class="dishIngredients">${soup.ingredients}</p>
            </div>
          <h1 class="dishPrice">kr. ${soup.price},-</h1>
        </div>
            <hr>
            `;

  const dishSalad = (salad) =>
    `
        <div class="dish-container">
          <div>
            <h1>${salad.dish}</h1>
            <p class="dishIngredients">${salad.ingredients}</p>
          </div>
          <h1 class="dishPrice">kr. ${salad.price},-</h1>
        </div>
        <hr>
    `;

  const dishMainCourse = (mainCourse) =>
    `
        <div class="dish-container">
          <div>
            <h1>${mainCourse.dish}</h1>
            <p class="dishIngredients">${mainCourse.ingredients}</p>
          </div>
          <h1 class="dishPrice">kr. ${mainCourse.price},-</h1>
        </div>
        <hr>
    `;

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
