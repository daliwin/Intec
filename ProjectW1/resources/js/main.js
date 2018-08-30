function renderShark(shark) {
	title = shark.NAME
	attack = shark.ATTACKS
	fatalities = shark.FATALITIES
	
	var li = document.createElement('li')
	var h1 = document.createElement('h1')
	var h4 = document.createElement('h4')
	var h5 = document.createElement('h4')
	
	li.appendChild(h1)
	li.appendChild(h4)
	li.appendChild(h5)
	
	h1.appendChild(document.createTextNode(title))
	h4.appendChild(document.createTextNode('Attacks: ' + attack))
	h5.appendChild(document.createTextNode('Fatalities: ' + fatalities))
	
	return li
}

function renderSharks(sharkData) {
	//var li = document.createElement('li')
	for (var i = 0; i < sharkData.length; i++) {
				document.getElementById('s-list').appendChild(renderShark(sharkData[i]))
			}
	//return li
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


