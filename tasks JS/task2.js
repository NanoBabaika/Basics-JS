
const  workers =  [
    {"name":"John","salary":500},
	{"name":"Mike","salary":1300},
	{"name":"Linda","salary":1500}
];


const getWorthyWorkers = workersArr => {
	const worthyWorkers = [];

	workersArr.forEach(currentWorkers => {
		if(currentWorkers.salary > 1000) {
			worthyWorkers.push(currentWorkers.name)
		}
	})

	return worthyWorkers;
}

console.log(getWorthyWorkers(workers));

 