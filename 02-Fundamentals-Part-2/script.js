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
    // Function declartion -
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
         // return retirement;
    //     return `${firstName} retires in ${retirement} years`
    // }

    // console.log(yearsUntilRetirement(2021, 'Andrew'));
    // // Arrow function does not get a 'this' keyword

// 36. Functions calling other functions
    function cutFruitPieces(fruit){
        return fruit * 4;
    }

    function fruitProcessor(apples, oranges){
        const applePieces = cutFruitPieces(apples);
        const orangePieces = cutFruitPieces(oranges);
        const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
        return juice;
    }
    
    console.log(fruitProcessor(2, 3));