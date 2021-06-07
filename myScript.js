'use strict';

//PROBLEM
//SMARTHOME THERMOMETER

const temperatures = [3, -2, -6, -1, 'error', 'ef', 9, 13, 17, 15, 14, 9, 5];

const calcAmplitude = function(temps) {
    // Mój pomysł
    // let errorCount = 0;
    // let tempsMy = temps;
    // for (let i = 0; i < tempsMy.length; i++) {
    //     const index = tempsMy.indexOf(tempsMy[i]);
    //     while (typeof tempsMy[i] === 'string') {
    //         tempsMy.splice(index, 1);
    //         errorCount++;
    //     }
    // }
    // console.log(tempsMy);
    // if (errorCount >= 1) {
    //     console.log(`Sensor errors count is ${errorCount}`);
    // }

    // const lowest = tempsMy.reduce(function(a, b) {
    //     return Math.min(a, b);
    // });
    // console.log(`The lowest temperature is ${lowest}`);

    // const lowest = Math.min(tempsMy);
    //The highest and the lowest number in array - my idea
    // const highest = tempsMy.reduce(function(a, b) {
    //     return Math.max(a, b);
    // });
    // console.log(`The highest temperature is ${highest}`);
    // return highest - lowest;

    // HIGHEST AND LOWEST - STACK OVERFLOW
    // Pomysł ze stack overflow
    // HIGHEST AND LOWEST
    let max = temps[0];
    let min = temps[0];
    for (let i = 1; i < temps.length; i++) {
        const currTemp = temps[i];
        if (typeof currTemp !== 'number') continue;
        //It can look like that:
        //if (currTemp > max) max = currTemp
        if (currTemp > max) {
            max = currTemp;
        }
        //It can look like that:
        //if (currTemp < min) min = currTemp
        if (currTemp < min) {
            min = currTemp;
        }
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcAmplitude(temperatures);
console.log(`Temperature amplitude is ${amplitude}`);
console.log(temperatures);

//PROBLEM 2
//FUNCTION SHOULD NOW RECEIVE 2 ARRAYS OF TEMPS
const temperatures1 = [3, -2, -6, -1, 'error', 'ef', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [
    13,
    12,
    6,
    36,
    19,
    13,
    27,
    15,
    24,
    'error',
    9,
    'error',
    35,
];

const calcAmplitudeNew = function(temps1, temps2) {
    //Temps1 and 2 can be concatenated with 2 ways
    //First is using ...
    // const temps = [...temps1, ...temps2];
    //Second is using concat method
    const temps = temps1.concat(temps2);
    let max = temps[0];
    let min = temps[0];
    for (let i = 1; i < temps.length; i++) {
        const currTemp = temps[i];
        if (typeof currTemp !== 'number') continue;
        //It can look like that:
        //if (currTemp > max) max = currTemp
        if (currTemp > max) {
            max = currTemp;
        }
        //It can look like that:
        //if (currTemp < min) min = currTemp
        if (currTemp < min) {
            min = currTemp;
        }
    }
    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcAmplitudeNew(temperatures1, temperatures2);
console.log(amplitudeNew);
console.log(`Temperature amplitude is ${amplitudeNew}`);
console.log(temperatures1);
console.log(temperatures2);

//Kelvin Bug
const measureKelvin = function() {
    const measurement = {
        type: 'temperature',
        unit: 'celsius',
        // value: prompt('Degree celsius'), //prompt is a string so it has to be changet to Number
        // value: Number(prompt('Degree celsius')),
        value: 10,
    };
    const kelvin = measurement.value + 273;
    // console.table(measurement);
    return kelvin;
};

console.log(measureKelvin());

//IDENTIFY BIGGER BUG - using a debugger
const calcAmplitudeBug = function(temps1, temps2) {
    //Temps1 and 2 can be concatenated with 2 ways
    //First is using ...
    // const temps = [...temps1, ...temps2];
    //Second is using concat method
    const temps = temps1.concat(temps2);
    let max = 0;
    let min = 0;
    for (let i = 1; i < temps.length; i++) {
        const currTemp = temps[i];
        if (typeof currTemp !== 'number') continue;
        //It can look like that:
        //if (currTemp > max) max = currTemp
        if (currTemp > max) {
            max = currTemp;
        }
        //It can look like that:
        //if (currTemp < min) min = currTemp
        if (currTemp < min) {
            min = currTemp;
        }
    }
    console.log(max, min);
    return max - min;
};
const amplitudeBug = calcAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
console.log(`Temperature amplitude ­­ is ${amplitudeBug}`);
// console.log(temperatures1);
// console.log(temperatures2);

///////////////////////////////////////
//CODING CHALLENGE - FORECAST MAXIMUM TEMPERATURES

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    //My approach
    // let strLocal = [];
    // for (let i = 0; i < arr.length; i++) {
    //     let index = arr.indexOf(arr[i]);
    //     strLocal.push(`${arr[i]}°C in ${index + 1} days`);
    // }
    // return `... ${strLocal.join(' ... ')} ...`;

    //JONAS approach
    let str = '... ';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    // console.log(str);
    return str;
};

console.log(printForecast(arr1));
console.log(printForecast(arr2));