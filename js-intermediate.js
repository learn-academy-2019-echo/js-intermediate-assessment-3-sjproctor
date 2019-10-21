// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


getFib = (num) => {
	if(num === 1){
		return [1, 1]
	} else {
		let fibArray = getFib(num - 1)
  	return [...fibArray, fibArray[num-1] + fibArray[num-2]]
	}
}
console.log(getFib(10))


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

getOdds = (array) => {
	let oddsOnly = array.filter(value => {
		return typeof value === "number" && value%2 !== 0
	})
	return oddsOnly
}
console.log(getOdds(fullArr1))
console.log(getOdds(fullArr2))


// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

flipIt = (array) => array.reverse()

console.log(flipIt(originalArray1))
console.log(flipIt(originalArray2))

// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })





// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

letterCounter = (string) => {
	let newArray = string.toLowerCase().split("")
	let filteredArray = newArray.filter(value => value === "l")
	return filteredArray.length
}
console.log(letterCounter(ourString))


// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”




// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
  constructor(radius){
  this.radius = radius
  }
  getArea(){
    return 4 * Math.PI * this.radius ** 2
  }
}
const mySphere1 = new Sphere(6)
const mySphere2 = new Sphere(10)
const mySphere3 = new Sphere(4)

console.log(mySphere1.getArea())
console.log(mySphere2.getArea())
console.log(mySphere3.getArea())


// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}



// 10. STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

addEmUp = (array) => {
	let runningTotal = 0
	return array.map(value => runningTotal += value)
}
console.log(addEmUp(numbersToAdd1))
console.log(addEmUp(numbersToAdd2))
console.log(addEmUp(numbersToAdd3))