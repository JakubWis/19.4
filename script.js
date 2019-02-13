// 1
const a='Hello', b='World', sayHello=`${a} ${b}`
console.log(`Task 1: ${sayHello}`)

//2
const multiply = (a,b=1) => a*b
console.log(`Task 2: 2 * 5 = ${multiply(2,5)}, but 2 * 1 = ${multiply(2)}`)

//3
const average = (...num) => num.reduce((x,y) => x+y) / num.length
console.log(`Task 3: average of 1,3,6,6 is equal to ${average(1,3,6,6)}`)

//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(`Task 4: average of 1, 5, 5, 5, 4, 3, 3, 2, 1 is equal to ${average(...grades)}`)

//5
const MsStrange = [1, 4, 'Iwona', false, 'Nowak']
const [ , , name, ,sur] = MsStrange
console.log(`${name} ${sur}`)