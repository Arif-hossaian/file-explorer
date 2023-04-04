// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
// 	const res1 = await Promise.all([promise1, promise2])
// 	const res2  = await Promise.all([promise3, promise4])
// 	return [res1, res2]// not executed because of one promise is rejected. if we want to indivisally return pormises Promise.allSettled()
// }

// runPromises()
// 	.then(res => console.log(res, 'res'))
// 	.catch(err => console.log(err, 'err')) //third



/////////////////////////////////////////////////
// function getFruit(fruits) {
// 	console.log(fruits?.[1]?.[1])
// }

// getFruit([['🍊', '🍌'], ['🍍', '❤️']]) // ❤️
// // getFruit() //undefined
// // getFruit([['🍍'], ['🍊', '🍌']]) //undeifned


//////////////////////////////////////////////////
 
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);

