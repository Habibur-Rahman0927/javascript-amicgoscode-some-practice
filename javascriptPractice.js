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
// console.log([...numbers])
// // const addition = addNumbers(numbers[0],numbers[1], numbers[2]);//bad code
// const addition = addNumbers(...numbers);
// console.log(addition);

/* Spread Operator Objects */

// const address = {
//     city : "Dhaka",
//     country : "BANGLADESH",
//     postCode: "LA44"
// };
// const name = {
//     firstName : 'Habib',
//     lastName: 'Rock'
// }
// const personSpread = {...name,...address};
// console.log(JSON.stringify(personSpread, null,2));

/* Arrow Funtions */

// const hello = function(){
//     const es6 = 'ES6';
//     return `Hello ${es6}`;
// }
// const powers = [1,2,3,4,5,6].map((number, index) => Math.pow(number, index));
// const add = (n1, n2)=> n1+n2;
// const milesToKm = (miles)=> miles*1.60934;

// console.log(hello());
// console.log(...powers);
// console.log(powers);
// console.log(add(100,100));
// console.log(milesToKm(100));

/* Lexical this  */

// const personLexi = {
//     name: 'Alex',
//     cars: ['ferrari', 'lombo'],
//     toString: function(){
//         // console.log(`${this.name} has ${this.cars}`);
//         // const that = this;
//         this.cars.forEach(car => {
//             console.log(`${this.name} has ${car}`);//binifat of arrow funtion
//         }/* .bind(this) */);
//     }
// }

// personLexi.toString();


/* Enhanced Object prooerties */

// const pricePropName = "PRICE";

// const calculator = (name, price) => {
//     return {
//         name/* :name */,
//         /* add: (n1, n2) => {
//             return n1 + n2;
//         } */
//         add(n1, n2) {
//             return n1 + n2;
//         },
//         [pricePropName.toLowerCase()]:price
//     }
// }
// const calc = calculator('casio', 19.36);
// console.log(calc);
// console.log(calc.add(10, 30));
// console.log(calc.price);

/* Array Descruturing */

// const names = ["anna", "Mariam", "Jeo","Mark", "Matt"];
// // const anna = names[0];
// // const mariam = names[1];
// // const jeo = names[2];

// const [anna, mariam, jeo, ...restOfNames] = names;

// console.log(`${anna} ${mariam} ${jeo}`);
// console.log(restOfNames);

/* Object Descruturing */

// const getUser = ()=>{
//     return{
//         name: "john",
//         surename: "Doe",
//         gender: 'male',
//         age:22,
//         address: {
//             country: "United states",
//             city: 'california',
//             fullAddress: {
//                 doorNumber: 100,
//                 street:'LA st'
//             }
//         }
//     }
// }

// const user = getUser()
// const {name, age, address:{country,fullAddress:{doorNumber}}} = user;
// console.log(name);
// console.log(age);
// console.log(country);
// console.log(doorNumber);


/* Function default Parameters */

// const calculatePay = (yearSalary, bouns = {
//     teamBonus: 0,
//     employeeBonus: 0
// }) => {
//     return yearSalary + bouns.teamBonus + bouns.employeeBonus;
// }


// console.log(calculatePay(22000,{teamBonus:1000, employeeBonus:2000}));


/* Classes */

/* class Animal {
    constructor(name, age) {
        console.log(`${name} is an animal and was created`);
        this.name = name;
        this.age = age;
    }
    static iAmAStaticMethod(){
        console.log('I am a static method inside of and animal class');
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is eating`);
    }
    wakeUp(){
        console.log(`${this.name} is waking up`);
    }
    logAge(){
        console.log(`${this.name} is ${this.age} years old`);
    }
} */

/* Inheritance */
/* class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    logBreed(){
        console.log(`${this.name} is a ${this.breed}`);
    }
    logAgeFromDog(){
        super.logAge();
    }
} */

/* 
class Cat extends Animal{
    constructor(name, age){
        super(name, age);
        
    }
    logBreed(){
        console.log(`${this.name} is a`);
    }
    logAgeFromCat(){
        super.logAge();
    }
} */

// Animal.iAmAStaticMethod();
// const Josh = new Cat('Josh', 5);
// Josh.logBreed();
// Josh.logAgeFromCat();
// console.log("--------------");
// const mike = new Dog('Mike', 5, "Bulldog");
// mike.logBreed();
// mike.logAgeFromDog();

/* const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.logAge()

console.log("------------");
const marshall = new Animal("Marshall", 3);
marshall.eat();
marshall.sleep();
marshall.wakeUp();
marshall.logAge(); */

/* Promises */

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Data back from the sever");
//     }, 3000);
//     setTimeout(() =>{
//         reject("NO!!!!!!!, Data back from the sever");
//     }, 4000);
// });

// promise.then(res => {
//     console.log(res);
// }).catch(error =>{
//     console.log(error);
// })

// const nameesPromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve(["Data", "back",'from', 'the', "sever"]);
//     }, 3000);
//     setTimeout(() =>{
//         reject("NO!!!!!!!, Data back from the sever");
//     }, 4000);
// });

// const surnameesPromise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve(["Willemas", "Bravo",'Mohammod', 'the', "sfa"]);
//     }, 3000);
//     setTimeout(() =>{
//         reject("NO!!!!!!!, Data back from the sever");
//     }, 4000);
// });

// Promise.all([nameesPromise, surnameesPromise]).then(data => {
//     // console.log(data);
//     const [names, surnames] = data;
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i];
//         const surname = surnames[i];
//         console.log(`${name} ${surname}`);

//     }
// }).catch(error => {
//     console.log(error);
// })



/* index.html here Promises and Fetch Api */

/* generators */

/* generator object */
// const getNumebrs = function* () {
//     yield 1;
//     yield "Hello";
//     yield true;
//     yield { name: "Habib" };
//     return "I am Done"
// }

// const numberGen = getNumebrs();
// console.log(numberGen.next().value);
// console.log(numberGen.next().value);
// console.log(numberGen.next().value);
// console.log(numberGen.next().value);
// console.log(numberGen.next().value);
// console.log(numberGen.next().value);


const getNumbers = function*(numbers){
    for (let i = 0; i < numbers.length; i++) {
         yield numbers[i];
        
    }
}

const getNumbersGen = getNumbers([1,2,3,4,5,6,7,8,9]);

const interval = setInterval(() =>{
    const next = getNumbersGen.next();
    // console.log(next);
    if(next.done){
        console.log("this generator is done");
        clearInterval(interval);
    }else{
        const number = next.value;
        console.log(number);
    }
},1000)

