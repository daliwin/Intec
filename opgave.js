function validatePassword(password, retype) {
  // check dat het paswoord niet leeg is
	if (password == '') {
		console.log('passwoord is leeg')
	}
  // check dat het paswoord lang genoeg is (10 karakters)
	else if (password.length < 10) {
		console.log('passwoord is niet lang genoeg')
	}
  // check dat de twee paswoorden hetzelfde zijn
	else if (password != retype) {
		console.log('paswoorden zijn niet hetzelfde')
	}
	else {
		console.log('OK')
	}
}

//validatePassword('azertyuiop', 'azertyuio')
//validatePassword('azertyuio', 'azertyuiop')
//validatePassword('azertyuiop', 'azertyuiop')
//validatePassword('', 'azertyuio')

workers = [
  { name: "paul", alive: false, salary: 5000 },
  { name: "steven", alive: true, salary: 1999 },
  { name: "tom", alive: true, salary: 10000 },
  { name: "rob", alive: false, salary: 100 },
  { name: "stanley", alive: true, salary: 20000 },
]

function highestEarner(workers) {
	if (workers.length == 0) {return}
  // geef de naam van de persoon die het meest verdient
	var workerSal = 0
	var workerName
	for (var i = 0; i < workers.length; i++) {
		var worker = workers[i]

		if (workers[i].salary >= workerSal) {
			workerSal = workers[i].salary
			workerName = workers[i].name
		}
		
	}
	console.log(workerName + ' verdient het meest met ' + workerSal)
}

//highestEarner(workers)



function distribute(workers) {
  // verdeel het salaris van de overleden werknemers
  // over de levenden
	var sum = 0
	var levend = 0
	for (var i = 0; i < workers.length; i++) {
		var worker = workers[i]
		if (workers[i].alive == true) {
			levend++
		}
		if (workers[i].alive == false) {
			sum = worker.salary + sum
			workers[i].salary = 0
		}
		
	}
	
	//console.log(sum)
	//console.log(levend)
	
	var add = sum / levend
	//console.log(add)
	
	for (var i = 0; i < workers.length; i++) {
		if (workers[i].alive == true) {
			workers[i].salary = workers[i].salary + add
		}
	}
}

distribute(workers)
console.log(workers)






