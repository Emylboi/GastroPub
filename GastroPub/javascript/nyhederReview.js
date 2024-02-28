async function fetchReview() {
    try {
      const response = await fetch("../data/nyhederReview.json");
      const review = await response.json();
      return review;
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  }
  const reviewData = await fetchReview();
  
  const app = {};
  
  app.init = () => {
    const reviewContainer = document.querySelector(".reviews-container");
  
    const reviewTemp = (review) =>
      `
      <div class="review-container">
            <h1>${review.name}</h1>
            <div>
                <i class="fa-solid fa-clock"></i>
                <p>${review.date}</p>
            </div>
            <div>
                <i class="fa-solid fa-message"></i>
                <p>${review.review}</p>
            </div>
        </div>
        <hr>
    `;
  
    const renderReview = () => {
      reviewData.forEach((review) => {
        reviewContainer.insertAdjacentHTML("beforeend", reviewTemp(review));
      });
    };
  
    renderReview();
  };
  
  app.init();
  