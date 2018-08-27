workers = [
	{ name: "paul", alive: true, salary: 5000 },
	{ name: "rob", alive: true, salary: 3000 },
	{ name: "anton", alive: true, salary: 5000 },
	{ name: "steven", alive: true, salary: 2000 },
	{ name: "tom", alive: true, salary: 10000 }
]

function sendCard(workers) {
	for (var i = 0; i < workers.length; i++){
			var worker = workers[i]
			if (worker.alive == false) {
				console.log(worker.name + " is dead")
			}
	}
}

sendCard(workers)

function loonkost(workers) {
	var total = 0
	for (var i = 0; i < workers.length; i++) {
		var worker = workers[i]
		if (worker.alive == true) {
			total = total + worker.salary
		}
	}
	console.log("Totaal loonkost: " + total)
}

loonkost(workers)

function gemiddelde(workers) {
	var deadWorkers = 0
	var total = 0
	for (var i = 0; i < workers.length; i++) {
		var worker = workers[i]
		if (worker.alive == false) {
			total = total + worker.salary
			deadWorkers++
		}
	}
	if (deadWorkers == 0) {
		console.log("gemiddelde: " + 0)
	} else {
		console.log("gemiddelde: " + (total / deadWorkers))
	}
}

gemiddelde(workers)
