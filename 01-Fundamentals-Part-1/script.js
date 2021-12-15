// 16. Coding Challenge #1

    // let markHeight, markMass, johnHeight, johnMass, markBMI, johnBMI = null;

    // markMass = 78;
    // markHeight = 1.69;

    // johnMass = 92;
    // johnHeight = 1.95;

    // markBMI = markMass / markHeight**2;
    // johnBMI = johnMass / johnHeight**2;

    // const compareBMI = (mark, john) => {
    //     return mark > john
    // };

    // let markhigherBMI = compareBMI(markBMI, johnBMI);

    // console.log(markhigherBMI);


// 17. Strings and Template literals

    // const firstname = 'Jonas';
    // const job = 'teacher';
    // const birthyear = 1991;
    // year = 2037;

    // this is not a template literal
    // const jonas = "I'm " + firstname + ', a ' + (year - birthyear) + ' years old ' + job + '!';
    // console.log(jonas);

    // this is a template literal
    // const jonasNew = `I'm ${firstname}, a ${year - birthyear} year old ${job}!`;
    // console.log(jonasNew);

    // Multi line string
    // console.log('string with\n\mutiple\n\lines');

    // console.log(`String
    // multiple
    // lines`);


// 18. Taking Decisions: if/ else statement

    // const age = 15;

    // if (age >= 18){
    //     console.log(`You're old enough! 🙂`)
    // }
    // else{
    //     const yearsLeft = 18 - age;
    //     console.log(`You're not old enough! You have ${yearsLeft} years left! 🥲`)
    // }

    // const birthYear = 1991;
    // let century;
    
    // IMPORTANT: whatever variable you declare within the if/else statement will not be accessible outsdie of it
    // unless called before the if/else statement
    // if ( birthYear <= 2000){
    //     century = 20;
    // }else{
    //     century = 21;
    // }

    // console.log(century);

// 19. Coding Challenge #2

    let markHeight, markMass, johnHeight, johnMass, markBMI, johnBMI;

    markMass = 78;
    markHeight = 1.69;

    johnMass = 92;
    johnHeight = 1.95;

    markBMI = markMass / markHeight**2;
    johnBMI = johnMass / johnHeight**2;

    const compareBMI = (mark, john) => {
        if(mark > john){
            return (`Mark's BMI (${mark}), is higher than John's (${john})!`);
        }else{
            return (`John's BMI (${john}), BMI is higher than Mark's BMI (${mark})!`);
        }
    };

    let markhigherBMI = compareBMI(markBMI, johnBMI);

    console.log(markhigherBMI);