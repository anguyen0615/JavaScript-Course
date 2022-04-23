// 33. Functions

    // function logger(){
    //     console.log("My name is Andrew");
    // }

    // Calling / Running / Invoking function
    // logger();

    // function fruitProcessor(apples, oranges){
    //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    //     return juice;
    // }

    // const appleJuice = fruitProcessor(5, 0);
    // console.log(appleJuice);

    // const appleOrangeJuice = fruitProcessor(2, 4);
    // console.log(appleOrangeJuice);

    // function is perfect for DRY code

// 34. Function Declartions vs. Expressions
    // Function declartion:
    // function calcAge1(birthYear){
    //     return 2037 - birthYear;
    // }

    // const age1 = calcAge1(2021);
    
    // // function expression: anonmous function -
    // const calcAge2 = function(birthYear){
    //     return 2037 - birthYear;
    // }

    // const age2 = calcAge2(2021);
    // console.log(age1, age2)

    /*
        You can call function declartions before they're defined but not function expressions
    */
// 35. Arrow functions
    // Function expression
    // const calcAge2 = function(birthYear){
    //     return 2037 - birthYear;
    // }
    
    // // Arrow function
    // const calcAge3 = birthYear => 2037 - birthYear;
    // const age3 = calcAge3(2021);
    // console.log(age3);

    // const yearsUntilRetirement = (birthYear, firstName) => {
    //     const age = 2037 - birthYear;
    //     const retirement = 65 - age;
    //     return retirement;
    //     return `${firstName} retires in ${retirement} years`
    // }

    // console.log(yearsUntilRetirement(2021, 'Andrew'));
    // // Arrow function does not get a 'this' keyword

// 36. Functions calling other functions
    // function cutFruitPieces(fruit){
    //     return fruit * 4;
    // }

    // function fruitProcessor(apples, oranges){
    //     const applePieces = cutFruitPieces(apples);
    //     const orangePieces = cutFruitPieces(oranges);
    //     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    //     return juice;
    // }
    
    // console.log(fruitProcessor(2, 3));

// 38. Coding Challenge #1
    // const calcAverage = (score1, score2, score3) =>{
    //     return ( score1 + score2 + score3 ) / 3;
    // };

    // const checkWinner = function(avgDolphins, avgKoalas){
    //     if(avgDolphins > (avgKoalas * 2)){
    //         return `Dolphins win with an avereage of ${avgDolphins}`
    //     }
    //     else if((avgDolphins *2) < avgKoalas){
    //         return `Koalas win with an avereage of ${avgKoalas}`
    //     }
    //     else{
    //         return `No one wins`
    //     }
        
    // };

    // console.log(checkWinner(calcAverage(44,23,71), calcAverage(23,34,27)));
    // console.log(checkWinner(calcAverage(85,54,41), calcAverage(23,34,27)));

// 39. Introduction to Arrays
    // const friend1 = 'Michael';
    // const friend2 = 'Steven';
    // const friend3 = 'Peter';

    // const friends = ['Michael', 'Steven', 'Peter'];
    // console.log(friends);

    // const y = new Array(1991, 1984, 2008, 2020); // this is also a way to create an array

    // console.log(friends[0]);

    // console.log(friends.length);
    // console.log(friends[friends.length - 1]);

    // friends[2] = 'Jay';
    // console.log(friends);

    // const firstName = 'Andrew'
    // const andrew = [ firstName, 'Nguyen', 2022-1997, 'Software Engineer', friends];
    // console.log(andrew);

    // // Exercise
    // const calcAge = function(birthYear){
    //     return 2037 - birthYear;
    // }

    // const years = [1990, 1967, 2002, 2010, 2018];

    // const age1 = calcAge(years[0]);
    // const age2 = calcAge(years[1]);
    // const age3 = calcAge(years[2]);
    // console.log(age1, age2, age3);

    // const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
    // console.log(ages);

// 40. Basic Array Opperation
    // const friends = ['Michael', 'Steven', 'Peter'];

    // // Add elements
    // const newLength = friends.push('Jay'); // adds to end
    // console.log(friends);
    // console.log(newLength);

    // friends.unshift('John'); // adds to beginning
    // console.log(friends);

    // // remove elements
    // const popped = friends.pop() // removes last element of array
    // console.log(friends);
    // console.log(popped);

    // friends.shift();
    // console.log(friends);

    // // Tells us where the index of element is
    // // returns 1 or -1

    // console.log(friends.indexOf('Steven'));
    // console.log(friends.indexOf('Bob'));

    // // ES6 method - returns true or flase, strict equality
    // friends.push(23);
    // console.log(friends.includes('Steven'));
    // console.log(friends.includes('Bob'));
    // console.log(friends.includes('23'));
    // console.log(friends.includes(23));

// 41. Coding Challenges #2
    // const calcTip = (bill) => {
    //     if(bill >= 50 && bill <= 300){
    //         return bill * 0.15;
    //     }
    //     else{
    //         return bill * 0.20;
    //     }
    // };

    // const bills = [125, 555, 44];
    // const tips = []
    // const total = []
    
    // for(let i = 0; i < bills.length; i++){
    //     tips.push(calcTip(bills[i]));
    //     total.push(bills[i] + tips[i]);
    // }
    // console.log(bills);
    // console.log(tips);
    // console.log(total);

// 42. Intro to Objects
// const andrew = {
//     // Property: value
//     firstName: 'Andrew',
//     lastName: 'Nguyen',
//     age: 2022-1997,
//     job: 'Software Engineer',
//     friends: ['Michael', 'Steven', 'Peter']
// };

// 43. Dot vs Bracket notation
//dot notation:
// console.log(andrew.lastName);

// // bracket notation:
// console.log(andrew['lastName']);

//  const nameKey = 'Name';

//  // you can put any expression in the brackets - does not work with the dot notation
//  console.log(andrew['first' + nameKey]);
//  console.log(andrew['last' + nameKey]);

//  const interestedIn = prompt('What do you want to know?');
//  console.log(interestedIn);
 
//  if(andrew[interestedIn]){
//     console.log(andrew[interestedIn]);
//  }else{
//      console.log('nothing to show')
//  }

//  andrew.location = 'Kansas';
//  andrew['phone'] = 'AT&T';
//  console.log(andrew);

 // Challenge
//  console.log(`${andrew.firstName} has ${andrew.friends.length} friends, and his best friend is called ${andrew.friends[0]}`);

 // 44. Object Methods
    
    // const andrew = {
    //     // Property: value
    //     firstName: 'Andrew',
    //     lastName: 'Nguyen',
    //     birthYear: 1997,
    //     job: 'Software Engineer',
    //     friends: ['Michael', 'Steven', 'Peter'],
    //     hasDriversLicense: true,

    //     // not DRY:
    //     // calcAge: function(birthYear){
    //     //     return 2037-birthYear;
    //     // }

    //     // calcAge: function(){
    //     //     return 2037 - this.birthYear;
    //     // }

    //     calcAge: function(){
    //         this.age = 2037 - this.birthYear;
    //         return this.age;
    //     },

    //     getSummary: function(){
    //         this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
    //         return this.summary
    //     }
    // };

//    andrew.calcAge();

    // If need to access age multiple times, shouldn't call this multiple time because
    // of computation 
    // console.log(andrew.calcAge());
    // console.log(andrew.calcAge());
    // console.log(andrew.calcAge());

    // Challenge
    // console.log(andrew.getSummary());


// 45. Coding Challenge #3

    // const mark = {
    //     firstName: 'Mark',
    //     lastName: 'Miller',
    //     mass: 78,
    //     heigh: 1.69,
    //     calcBMI: function(){
    //         this.BMI = this.mass / this.heigh **2;
    //         return this.BMI;
    //     }
    // };

    // const john = {
    //     firstName: 'John',
    //     lastName: 'Smith',
    //     mass: 92,
    //     heigh: 1.95,

    //     calcBMI: function(){
    //         this.BMI = this.mass / this.heigh **2;
    //         return this.BMI;
    //     }
    // };

    // mark.calcBMI();
    // john.calcBMI();

    // console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is ${john.BMI > mark.BMI?'higher':'lower'} than ${mark.firstName} ${mark.lastName}'s (${mark.BMI})!`)

// 46. Iteration: The For Loop

    // For loops keep running while condition is TRUE;
    // It checks before running it
    // for(let rep = 1; rep <= 10; rep++ ){
    //     console.log(`Lifting weights repetition ${rep}`)
    // };


// 47. Loop arrays, breaking and continuing
    // const andrewArray = [
    //     'Andrew',
    //     'Nguyen',
    //     2037 - 1991,
    //     'Software Engineer',
    //     ['Brady', 'Travis', 'Bob']
    // ];

    // const types = [];

    // for(let i = 0; i < andrewArray.length; i++){
    //     console.log(andrewArray[i], typeof andrewArray[i]);

    //     // Filling types array
    //     // types[i] = typeof andrewArray[i];

    //     types.push(typeof andrewArray[i]);
    // }

    // console.log(types)

    // const years = [1991, 2007, 1969, 2020];
    // const ages = [];
    // for(let i = 0; i < years.length; i++){
    //     ages.push( 2037 - years[i] );
    // }

    // console.log(ages)

    // Continue and Break statement
    // console.log("Continue")
    // for(let i = 0; i < andrewArray.length; i++){
        
    //     if(typeof andrewArray[i] !== 'string') continue;
    //     console.log(andrewArray[i], typeof andrewArray[i]);
    // }
    // console.log("Break")
    // for(let i = 0; i < andrewArray.length; i++){
        
    //     if(typeof andrewArray[i] === 'number') break;
    //     console.log(andrewArray[i], typeof andrewArray[i]);
    // }

// 48. Looping backwards and Loops in Loops
    // const andrewArray = [
    //     'Andrew',
    //     'Nguyen',
    //     2037 - 1991,
    //     'Software Engineer',
    //     ['Brady', 'Travis', 'Bob'],
    //     true
    // ];

    // for(let i = andrewArray.length - 1; i >= 0; i--){
    //     console.log(i, andrewArray[i]);
    // }

    // for(let exercise = 1; exercise < 4; exercise++){
    //     console.log(`--Starting exercise ${exercise} --`)
    //     for(let rep = 1; rep < 6; rep++){
    //         console.log(`Lifting weights repetition ${rep}`)
    //     }
    // }

// 49. While Loop
    // console.log("--For Loop--")
    // for(let rep = 1; rep <= 10; rep++ ){
    //     console.log(`Lifting weights repetition ${rep}`)
    // };

    // let rep = 1;
    // console.log("--While Loop--")
    // while(rep <= 10){
    //     console.log(`Lifting weights repetition ${rep}`)
    //     rep++;
    // };

    // let dice = Math.trunc(Math.random() * 6) + 1;

    // Down side is if it is a 6 right at the beginning then the loop wouldn't be touched
    // while(dice !== 6){
    //     console.log(`You rolled a ${dice}.`);
    //     dice = Math.trunc(Math.random() * 6) + 1;
    //     if(dice === 6){
    //         console.log(`You finally rolled a ${dice}!!`);
    //     }
    // }

// 50. Coding challenge #4
    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    const tips = [];
    const total = [];

    const calcTip = (bill) => {
        if(bill >= 50 && bill <= 300){
            return bill * 0.15;
        }
        else{
            return bill * 0.20;
        }
    };

    for(let i = 0; i < bills.length; i++){
        tips.push[calcTip(bills[i])];
        console.log(tips)
    }

    