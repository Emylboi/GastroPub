async function fetchStuff() {
  try {
    const response = await fetch("../data/index.json");
    const stuff = await response.json();
    return stuff;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
const stuffData = await fetchStuff();

const app = {};

app.init = () => {
  const gastroPubContainer = document.querySelector(".gastroPub-container");

  const template = (stuff) =>
    `
    <section class="gastroPub ${stuff.uniqueClass}">
        <div>
            <h1>${stuff.title}</h1>
            <p>${stuff.text}</p>
            <a href="${stuff.buttonLink}"><button>${stuff.buttonText}</button></a>
        </div>
    </section> 
  `;

  const renderStuff = () => {
    stuffData.forEach((stuff) => {
      gastroPubContainer.insertAdjacentHTML("beforeend", template(stuff));
    });
  };

  renderStuff();
};

app.init();
