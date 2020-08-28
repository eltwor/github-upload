"use strict";

var apiURL = 'https://run.mocky.io/v3/79cf53f1-d5d3-49dc-b134-3ef2500b6211';
var container = document.querySelector('.square--container');

var appendArticle = function appendArticle(articleData) {
  var imgSrc = articleData.imgSrc,
      title = articleData.title,
      description = articleData.description;
  var content = "\n    <div class=\"square\">\n  <img\n  src=\"".concat(imgSrc, "\"\n  alt=\"article-image\"\n  class=\"square--image\"\n  />\n  <div class=\"square--content\">\n  <h3 class=\"square--title\">").concat(title, "</h3>\n  <p class=\"square--description\">\n  ").concat(description, "\n  </p>\n  <a class=\"square--button\" href=\"#\">Show more</a>\n  </div>\n  </div>\n  "); // Append newyly created card element to the container

  container.innerHTML += content;
};

fetch(apiURL).then(function (response) {
  return response.json();
}).then(function (articles) {
  return articles.forEach(function (article) {
    return appendArticle(article);
  });
});