var crel = require('crel')

function renderArticle(article) {
	return crel('div',
		crel('h1', article.NAME),
		crel('p', article.ATTACKS),
		crel('p', article.FATALITIES))
}

function renderArticles(articles) {
	return crel('div',
		articles.map(renderArticle))
}

function renderPage(articles) {
	return crel('div',
			   renderArticles(articles))
}

module.exports = renderPage