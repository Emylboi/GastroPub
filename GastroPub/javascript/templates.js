/* From Index */
export const template = (stuff) =>
`
    <section class="gastroPub ${stuff.uniqueClass}">
        <div>
            <h1>${stuff.title}</h1>
            <p>${stuff.text}</p>
            <a href="${stuff.buttonLink}"><button>${stuff.buttonText}</button></a>
        </div>
    </section> 
`;

/* From Galleri */
export const galleryTemp = (gallery) =>
`
    <img src="${gallery.image}" class="galleryImage">
`;

export const dishSoup = (soup) =>
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

export const dishSalad = (salad) =>
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

export const dishMainCourse = (mainCourse) =>
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

export const reviewTemp = (review) =>
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
