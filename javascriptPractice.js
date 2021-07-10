console.log('javascript');


/* constiables */

// const name = "Maria Jones";// string
// const age = 21; // number
// const hasDiverLicence = true; // boollen
// const empty = undefined; // false;

// console.log(name + " type = " + typeof name);
// console.log(age + " type = " + typeof age);
// console.log(hasDiverLicence + " type = " + typeof hasDiverLicence);
// console.log(empty + " type = " + typeof empty);

/* Objects */

// const person = {
//     name: "Maria Jones",
//     age:21,
//     hasDiverLicence: true,
//     dataOfBrith: "01/02/2002",
//     address: {
//         firstLine: "Dhaka",
//         postCode: "ES1",
//         country: "England"
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hasDiverLicence);
// console.log(JSON.stringify(person));
// console.log(JSON.stringify(person.address));
// console.log(person);
// console.log(Object.values(person))


/* Arrays */

// const name = "Alex";
// const names = ["Alex", "Maria", "Sam"];

// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// console.log(names.length);

// for (let i of names) {
//     console.log(i);
// }
// // 
// names.forEach((i, index) => {
//     console.log(index + "-" + i);
// });


/* Arithemetic Operators */
// +, -, /, *

// const addition = 2 + 2;
// const subtraction = 100 - 90;
// const division = 10 / 5;
// const multi = 2 * 49;
// const remainder = 20 % 2;
// console.log(addition);
// console.log(subtraction);
// console.log(division);
// console.log(multi);
// console.log(remainder);


/* Function */

// const addNumbers = (num1, num2)=>{
//     //function body
//     //Defien logic
//     console.log((num1+num2));
//     console.log((num1+num2)/2);
// }

// addNumbers(20,10);

// const addNumbersReturn = (num1, num2)=>{
//     const result = num1+num2;
//     return result;
// }

// const result = addNumbersReturn(40,10);
// console.log(result);



/* More Function */


// const person = {name:"Anna", age: 20}
// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person))

// console.log("Habib".toLowerCase());
// console.log("Habib".toUpperCase());
// console.log("Habib Rock".endsWith("Rock"));
// console.log("Habib Rock".startsWith("Rock"));

/* Loop */

// const persons = [
//     {
//         name: "Alex",
//         age:22
//     },
//     {
//         name: "Maira",
//         age:30
//     }
// ]

// for (let i = 0; i < persons.length; i++) {
//     const Allperson = persons[i].name
//     console.log(Allperson)

// }

// let number = 0;
// while (number < 5) {
//     console.log(number);
//     if(number === 3){
//         break;
//     }
//     number++;
// }

// let i = 0;
// do{
//     i++;
//     if(i === 3){
//         continue;
//     }
//     console.log(i);
// }while (i<5);

/* If Statement */


// const bool = true;

// if(bool){
//     console.log("true");
// }else{
//     console.log("false");
// }

// const ifPerson = {
//     name: "Anna",
//     age: 18
// }
// if(ifPerson.age>= 18){
//     console.log(ifPerson.name+ "is an adult");
// }
// else if(ifPerson.age == 17){
//     console.log(ifPerson.name+ "is about to be an adult");
// }
// else{
//     console.log(ifPerson.name+ "is not an adult");
// }


/* switch */

// switch (true) {
//     case (ifPerson.age > 18):
//         console.log(ifPerson.name+ "is an adult");
//         break;
//     case (ifPerson.age === 18):
//         console.log(ifPerson.name+ "is about to be an adult");
//         break;

//     default:
//         console.log("We don't Know");
//         break;
// }

// switch (new Date().getDay()) {
//     case 6:
//         console.log("SaturDay")
//         break;

//     default:
//         console.log("I don't know");
//         break;
// }

/* Comperison & Logical Operators */

// console.log(10 === 10);
// console.log(10 < 10);
// console.log(10 <= 10);
// console.log(10 > 10);
// console.log(10 >= 10);
// console.log(10 != 10);
// console.log(10 != 11);
// console.log("Logical Operator")
// console.log(10 === 10 && 20 === 20);//and
// console.log(10 === 10 && 20 != 20);
// console.log(10 === 10 || 20 != 20);//or
// console.log(10 === 10 || 30 === 20);
// console.log(!10 === 10);// ! not
// console.log(!(10 === 11));// ! not

// if (!(10 === 11)) {//ture
//     console.log("if statement is working");
// }


/* Equality without type coercion and 3 equals sign */
// console.log("with type cocercion")
// console.log(typeof 0 + " " + typeof false);
// console.log(0 == false);

// console.log(typeof "0" + " " + typeof false);
// console.log("0" == false);

// console.log(typeof 1 + " " + typeof false);
// console.log(1 == "1");

// console.log("withOut type cocercion");// triple equal is best;
// console.log(typeof 0 + " " + typeof false);
// console.log(0 === false);

// console.log(typeof "0" + " " + typeof false);
// console.log("0" === false);

// console.log(typeof 1 + " " + typeof false);
// console.log(1 === "1");

// // != best !==




/* Map | Filter | Reduce */

// console.log('Map, Filter, Reduce');
// const mapingNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// mapingNumber.map(num => console.log(num*2));


// const filterNumber = mapingNumber.filter(num => num%2 == 0);
// console.log(filterNumber)

// const reduceAll = [1, 2, 3, 4, 5].reduce((accumulator, current)=>{
//     return accumulator + current;
// })
// console.log(reduceAll)

/* CallBacks */


// function callBackExample(name, callback){
//     console.log(callback(name));
// }
// callBackExample("Habibur Rahman", (name)=> "Hello "+ name);

/* fundamental complete */

/* Spread Operator Arrays */

// const arrayOne = ['Marian', 'Anna', "Alex"];
// const ArrayTwo = ['said', 'Ismail', 'Aisha'];

// const concatArray = [...arrayOne,...ArrayTwo];
// console.log(concatArray);

// concatArray.forEach((name)=>{
//     console.log(name);
// })

// const name = "Rakib";
// const nameToArray = [...name];
// console.log(nameToArray);


// const addNumbers = (n1, n2, n3) =>{
//     return n1+n2+n3;
// }
// const numbers = [1, 5, 9];
// console.log(...numbers)
// // const addition = addNumbers(numbers[0],numbers[1], numbers[2]);//bad code
// const addition = addNumbers(...numbers);
// console.log(addition);