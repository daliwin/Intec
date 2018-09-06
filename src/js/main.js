var tabletop = require('tabletop')

tabletop.init({
	key: 'https://docs.google.com/spreadsheets/d/13EyQnXAngwysDCYHoEow8XwXMAaPHhkvcEMZZBxWEBs/pubhtml',
	callback: function (tabletopData, tabletop) {
		//document.body.appendChild(tabletopData)
		console.log(tabletopData)
	},
	simpleSheet: true
})

//function renderShark(shark, nb) {
//    var sharkName = shark.NAME
//    var attack = shark.ATTACKS
//    var fatalities = shark.FATALITIES
//    var sharkImage = shark.IMAGE
//
//    var div = document.createElement('div')
//    var h1 = document.createElement('h1')
//    var h4 = document.createElement('h4')
//    var h5 = document.createElement('h4')
//    var img = document.createElement('img')
//
//    img.setAttribute('src', sharkImage)
//    img.setAttribute('id', 'image')
//
//    div.appendChild(h1)
//    div.appendChild(img)
//    div.appendChild(h4)
//    div.appendChild(h5)
//
//    h1.appendChild(document.createTextNode(nb + '. ' + sharkName))
//    h4.appendChild(document.createTextNode('Attacks: ' + attack))
//    h5.appendChild(document.createTextNode('Fatalities: ' + fatalities))
//
//    return div
//}
//
//function renderSharks(sharkData) {
//	var div = document.createElement('div')
//    var nb = sharkData.length
//    for (var i = 0; i < sharkData.length; i++) {
//        document.getElementById('app-4').appendChild(renderShark(sharkData[i], nb))
//        nb--
//    }
//	return div
//}
//
//function init() {
//    var elem = document.getElementById('app-4')
//    elem.style.display = 'none'
//
//    Tabletop.init({
//        key: 'https://docs.google.com/spreadsheets/d/13EyQnXAngwysDCYHoEow8XwXMAaPHhkvcEMZZBxWEBs/pubhtml',
//        callback: function (tabletopData, tabletop) {
//            console.debug(tabletopData)
//            elem.style.display = 'block'
//
//            document.appendChild(renderSharks(tabletopData))
//        },
//        simpleSheet: true
//    })
//}
//
//window.addEventListener('DOMContentLoaded', init)