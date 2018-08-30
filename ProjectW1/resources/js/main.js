function renderShark(shark) {
	title = shark.NAME
	attack = shark.ATTACKS
	fatalities = shark.FATALITIES
	
	var div = document.createElement('div')
	var h1 = document.createElement('h1')
	var p = document.createElement('p')
	var br = document.createElement('br')
	
	div.appendChild(h1)
	div.appendChild(p)
	
	h1.appendChild(document.createTextNode(title))
	p.appendChild(document.createTextNode('Attacks: ' + attack))
	p.appendChild(document.createTextNode('Fatalities: ' + fatalities))
	
	return div
}

function renderSharks(sharkData) {
	for (var i = 0; i < sharkData.length; i++) {
				document.getElementById('app-4').appendChild(renderShark(sharkData[i]))
			}
}

function init() {
	var elem = document.getElementById('app-4')
	elem.style.display = 'none'

	Tabletop.init({
		key: 'https://docs.google.com/spreadsheets/d/13EyQnXAngwysDCYHoEow8XwXMAaPHhkvcEMZZBxWEBs/pubhtml',
		callback: function (tabletopData, tabletop) {
			console.debug(tabletopData)
			elem.style.display = 'block'
			
			renderSharks(tabletopData)
		},
		simpleSheet: true
	})
}

window.addEventListener('DOMContentLoaded', init)


