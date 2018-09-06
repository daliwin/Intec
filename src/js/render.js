var crel = require('crel')

require('../css/main.css')

function renderHeader() {
    return crel('div', {
            class: 'hero-inner'
        }),
        crel('h1', 'TOP 10 DEADLIEST SHARKS')
}


function renderArticle(article) {
    return crel('div', {
            class: 'pure-g'
        },
        crel('div', {class: 'pure-u-1 pure-u-md-1-3'},
            crel('h1', article.NAME),
            crel('img', {
                id: 'image',
                src: article.IMAGE
            })),
        crel('div', {id: 'test', class: 'pure-u-1 pure-u-md-1-3'},
            crel('h4', 'Attacks: ', article.ATTACKS),
            crel('h4', 'Deaths: ', article.FATALITIES)),
        crel('div', {class: 'pure-u-1 pure-u-md-1-3'},
            crel('p', article.INFO))
    )
}


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
        crel('div', renderArticles(articles))
    )
}

module.exports = renderPage
