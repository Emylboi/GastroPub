const data = {};

/* From Index */
data.fetchStuff = async () => {
  try {
    const response = await fetch("./data/index.json");
    const stuff = await response.json();
    return stuff;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

/* From Galleri */
data.fetchGallery = async () => {
  try {
    const response = await fetch("./data/galleri.json");
    const gallery = await response.json();
    return gallery;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

/* From Menu */
data.fetchSoup = async () => {
  try {
    const response = await fetch("./data/supper.json");
    const soup = await response.json();
    return soup;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

data.fetchSalad = async () => {
  try {
    const response = await fetch("./data/salater.json");
    const salad = await response.json();
    return salad;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

data.fetchMainCourse = async () => {
  try {
    const response = await fetch("./data/hovedretter.json");
    const mainCourse = await response.json();
    return mainCourse;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

/* From nyhederReview */
data.fetchReview = async () => {
    try {
      const response = await fetch("./data/nyhederReview.json");
      const review = await response.json();
      return review;
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  }

export default data;
