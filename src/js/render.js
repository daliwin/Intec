var crel = require('crel')

require('../css/main.css')

function renderHeader() {
	return crel('div', {
			class: 'hero-inner'
		}),
		crel('h1', 'TOP 10 DEADLIEST SHARKS')
}


function renderArticle(article) {
	return crel('div',
		crel('h1', article.NAME),
		crel('img', {
			id: 'image',
			src: article.IMAGE
		}),
		crel('p', 'Attacks: ', article.ATTACKS),
		crel('p', article.FATALITIES))
}

function renderArticles(articles) {
	return articles.map(renderArticle)
}

function renderPage(articles) {
	return crel(document.body,
		crel('section', {
			class: 'hero'
		}, renderHeader()),
		crel('div', {
				id: 'app-4'
			},
			renderArticles(articles)))
}

module.exports = renderPage
