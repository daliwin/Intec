var crel = require('crel')

require('../css/main.css')

function renderHeader() {
	return crel('div', {
			class: 'hero-inner'
		}),
		crel('h1', 'TOP 10 DEADLIEST SHARKS')
}

function renderArticle(article) {
	var component = crel('div')
	var button = crel('button', {class: 'pure-button pure-button-primary'}, 'More info')
	
	button.addEventListener('click', function () {
        var content = crel('p', article.INFO)
        component.removeChild(button)
        component.appendChild(content)
      })
	
	return crel('div', {class: 'pure-u-1 pure-u-md-1-3'},
				component,
			crel('h1', article.NAME),
			crel('img', {class: 'pure-img', src: article.IMAGE}),
			crel('h4', 'Attacks: ', article.ATTACKS),
			crel('h4', 'Deaths: ', article.FATALITIES),
				button)
//			crel('p', article.INFO))
}


//function renderArticle(article) {
//	return crel('div', {
//			class: 'pure-g'
//		},
//		crel('div', {
//				class: 'pure-u-1 pure-u-md-1-3'
//			},
//			crel('h1', article.NAME),
//			crel('img', {
//				class: 'pure-img',
//				src: article.IMAGE
//			})),
//		crel('div', {
//				class: 'pure-u-1 pure-u-md-1-3'
//			},
//			crel('h4', 'Attacks: ', article.ATTACKS),
//			crel('h4', 'Deaths: ', article.FATALITIES)),
//		crel('div', {
//				class: 'pure-u-1 pure-u-md-1-3'
//			},
//			crel('p', article.INFO))
//	)
//}


function renderArticles(articles) {
	return articles.map(renderArticle)
}

function renderPage(articles) {
	return crel(document.body,
		crel('section', {
			class: 'hero'
		}, renderHeader()),
		//        crel('div', {
		//                class: 'section group'
		//            },
		crel('div', {
			class: 'pure-g sharks'
		}, renderArticles(articles))
	)
}

module.exports = renderPage
