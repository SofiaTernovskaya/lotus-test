const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

function updateTopArticlesDOM(articles) {
  const topArticlesContainer = document.createElement('ul');
  topArticlesContainer.className = 'promoted-articles__list row';

  articles.reverse().forEach(aritcle => {
    const articleElement = document.createElement('li');
    articleElement.className =
      'promoted-articles-item column column--xs-12 column--sm-6 column--md-4';
    articleElement.innerHTML = `
      <h3 class="promoted-articles-item__title">${aritcle.title}</h3>
      <p class="meta promoted-articles-item__text">${aritcle.body}</p>
    `;
    topArticlesContainer.append(articleElement);
  });

  $('.top-articles').append(topArticlesContainer);
  $('.loader').remove();
}

export function loadPosts() {
  $.ajax({
    crossDomain: true,
    url: `${POSTS_URL}?_limit=10`,
    success: updateTopArticlesDOM
  });
}
