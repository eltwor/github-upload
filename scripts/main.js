const apiURL = 'https://run.mocky.io/v3/79cf53f1-d5d3-49dc-b134-3ef2500b6211';

const container = document.querySelector('.square--container');


const appendArticle = articleData => {
    const {
        imgSrc,
        title,
        description
    } = articleData;


    const content = `
    <div class="square">
  <img
  src="${imgSrc}"
  alt="article-image"
  class="square--image"
  />
  <div class="square--content">
  <h3 class="square--title">${title}</h3>
  <p class="square--description">
  ${description}
  </p>
  <a class="square--button" href="#">Show more</a>
  </div>
  </div>
  `;

    // Append newyly created card element to the container
    container.innerHTML += content;
};

fetch(apiURL)
    .then(response => response.json())
    .then(articles => articles.forEach(article => appendArticle(article)));



    