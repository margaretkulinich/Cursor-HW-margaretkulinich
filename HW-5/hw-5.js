const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 1 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
 function getRandomArray(length, min, max) {
    const randomNumbersArray = [];
    if (min > max) {
        console.error("min cannot be over max!");

        return;
    }

    for (i = 0; i < length; i++) {
        randomNumbersArray.push(getRandomNumber(min, max));
    }

    return randomNumbersArray;
}

console.log(getRandomArray(15, 1, 100));


// 2 Створіть функцію getModa(...numbers)  НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getModa(...numbers) {
    const arrIntegers = numbers.filter(number => Number.isInteger(number));
    let moda = [];
    let maxCount = 0;

    for (let i = 0; i < arrIntegers.length; i++){
        let counter = 0;

        arrIntegers.forEach((number) => {
            if (number === arrIntegers[i]) {
                ++counter;
            }
        });
        
        if (counter > maxCount) {
            maxCount = counter;
            moda = [arrIntegers[i]];

            continue;
        }

        if (counter < maxCount) {
            continue;
        }
        
        if (!moda.includes(arrIntegers[i])) {
            moda.push(arrIntegers[i]);
        }
    }
        
    return moda;
};

console.log(getModa(6, 2, 55, 11.2, 77, 78, 2, 55.6, 77, 57, 87, 23, 2, 56, 3, 2, 77, 77));

// 3 варіант 1 рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getAverages(...numbers) {
    const arrIntegers = numbers.filter(number => Number.isInteger(number));
    const sumNumbers = arrIntegers.reduce((sum, current) => sum + current);

    const arrAverage = +(sumNumbers / arrIntegers.length).toFixed(2);

    return arrAverage;
}

console.log(getAverages(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

/* 3 варіант 2 рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getAverage(...numbers) {
    const integersSumInitial = 0;
    const integersAmountInitial = 0;

    const arrIntAverageResult = numbers.reduce((arrIntAverage, currentNum) => {
        const sum = arrIntAverage[0];
        const arrIntegerLength = arrIntAverage[1];
       
        if (Number.isInteger(currentNum)) {
           return [sum + currentNum, arrIntegerLength + 1];
        }
        
        return [sum, arrIntegerLength];
    }, [integersSumInitial, integersAmountInitial]);

    return +(arrIntAverageResult[0] / arrIntAverageResult[1]).toFixed(2);
}
*/


const maxOfArray = (numArray) => Math.max.apply(null, numArray);
const minOfArray = (numArray) => Math.min.apply(null, numArray);

// 4 рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getMedian(...numbers) {
    const arrIntegers = numbers.filter(number => Number.isInteger(number));
    const arrMedian = (maxOfArray(arrIntegers) + minOfArray(arrIntegers)) / 2;

    return arrMedian;
}

console.log(getMedian(1, 2, 3, 4));


// 5 фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = (...numbers) => numbers.filter(
    number => Number.isInteger(number) && (number % 2)
);

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));


// 6 порахує кількість чисел більших 0
const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;

console.log(countPositiveNumbers(-1, 2.2, 10, 22, 11, -0.5, -6, -100, 100, 111));


// 7  відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (...numbers) => numbers.filter(
        number => Number.isInteger(number) && !(number % 5) && !(number === 0)
);

console.log(getDividedByFive(1, -2, 0, 55, -20, 100, 3, -4, -5, 6));


// 8 розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
function replaceBadWords(string) {
    const badWords = ['fuck', 'shit'];
    let newStr = string;

    for (let i = 0; i < badWords.length; i++) {
        const newValueBadWord = '*'.repeat(badWords[i].length);
		newStr = newStr.split(badWords[i]).join(newValueBadWord);
	}

    return newStr;
}

console.log(replaceBadWords('Are you fucking kidding?'));


// 9 divideByThree("Commander) -> ["com", "man", "der"] 
function divideByThree(word) {
    if (word.length < 3) {
        return word;
    }

    const wordToLowerCased = word.trim().toLowerCase();
    let result = [];

    for (let i = 0; i < wordToLowerCased.length; i += 3) {
        let wordSyllable = wordToLowerCased.slice(i, i + 3);

        result.push(wordSyllable);
    }

    return result;
}

console.log(divideByThree("live"));