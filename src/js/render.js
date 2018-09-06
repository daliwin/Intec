var crel = require('crel')

require('../css/main.css')

function renderHeader() {
	return crel('div', {
			class: 'hero-inner'
		},
		crel('h1', 'TOP 10 DEADLIEST SHARKS'))
}

function renderArticle(article) {
	return crel('div',
		crel('h1', article.NAME),
		crel('p', article.ATTACKS),
		crel('p', article.FATALITIES),
		crel('img', {
			src: article.IMAGE
		}))
}

function renderArticles(articles) {
	return crel('div',
		articles.map(renderArticle))
}

function renderPage(articles) {
	return crel('section', {
			class: 'hero'
		}, renderHeader())
//		crel('div',
//			renderArticles(articles)))
}

module.exports = renderPage