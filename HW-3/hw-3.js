 // 1 отримує будь-яке число та виводить найбільшу цифру в цьому числі
function getMaxDigit(number) {
    const str = String(number);
    let maxDigit = 0;

    for (let i = 0; i <= str.length - 1; i++) {
        const value = +str[i];

        if (value > maxDigit) {
            maxDigit = value;
        }
    }

    return maxDigit;
}


// 2 визначає ступінь числа
function getMathPow(x, y) {
    let result = 1;
   
    for (let pow = 1, absoluteY = Math.abs(y); pow <= absoluteY; pow++) {
        result *= x;
    }

    return (y < 0) ? (1 / result) : result;
}


// 3 форматує ім'я, роблячи першу букву великою
function transformName(name) {
    if (!name) return name;

    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}


// 4 вираховує суму, що залишається після оплати податку від зп
function getNetSalary(grossSalary) {
    const taxPercentage = 19.5;
    const grossSalaryPercentage = 100;
    const netSalaryQuotient = (grossSalaryPercentage - taxPercentage) / 100;

    return Number((grossSalary * netSalaryQuotient).toFixed(1));
}


// 5 повертає випадкове ціле число в діапазоні від N до M
function getRandomNumber(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n; //Максимум и минимум включаются
}


// 6 рахує скільки разів певна буква повторюється в слові
function countLetter(letter, word) {
    const wordLowerCase = word.toLowerCase();
    const letterLowerCase = letter.toLowerCase();
    let sum = 0;

    for (let char of wordLowerCase) {
        if (char === letterLowerCase)
        sum += 1;
    }

    return sum;
}


// 7 конвертує долари в гривні та навпаки
function convertCurrency(strValue) {
    const currentValue = 25;
    const money = parseInt(strValue);
    const dollarSign = '$';
    const uahSign = 'uah';

    if (strValue.includes(dollarSign)) {
        return `${money * currentValue}${uahSign}`;
    }
    
    const strValueLowerCased = strValue.toLowerCase();

    if (strValueLowerCased.includes(uahSign)) {
        return `${money / currentValue}${dollarSign}`;
    }

    alert('There is no such currency!');
}


// 8 варіант 1 генерації випадкового паролю 
function getRandomPassword(passwordLength = 8) {
    let password = '';

    for (i = 1; i <= passwordLength; i++) {
      password += Math.floor(Math.random() * 10);  
    }
    
    return password;
}

//8 варіант 2 генерації випадкового паролю
function getRandomPassword(passwordLength = 8) {
    const passwordItem = String(Math.floor(Math.random() * 10));
    
    if (passwordLength === 1) {
        return passwordItem;
    }

    return passwordItem + getRandomPassword(passwordLength - 1);
}


// 9 видаляє всі букви з речення Приклад: deleteLetters('a', "blablabla") -> "blblbl"
function deleteLetters(letter, word) {
    let str = '';

    for(let i = 0; i < word.length; i++){
        if(letter !== word[i]){
            str += word[i];
        }
    }

    return str;
}


// 10. перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам")
function isPalindrome(str) {
    const strModified = str.replaceAll(' ', '').toLowerCase();
    const strModifiedLength = strModified.length;
    let result = '';

    for (let i = 0, midLength = Math.floor(strModifiedLength / 2); i < midLength; i++) {
        if (strModified[i] === strModified[strModifiedLength - 1 - i]) {
            result = 'This is Palindrome';
        } else {
            result = 'This is not Palindrome!';
        }
    }

    return result;
}


// 11. видаляє з речення букви, які зустрічаються більше 1 разу
function deleteDuplicateLetter(phrase) {
    const phraseModified = phrase.replaceAll(' ', '').toLowerCase();
    let result = '';

    for (let i = 0; i < phraseModified.length; i++) {
        if (phraseModified.indexOf(phraseModified[i]) === phraseModified.lastIndexOf(phraseModified[i])) {
            result += phraseModified[i];
        }
    }
    
    return result;
}


console.log(getMaxDigit(987));
console.log(getMathPow(2, -2));
console.log(transformName("вЛАД"));
console.log(getNetSalary(1000));
console.log(getRandomNumber(1, 10));
console.log(countLetter("а", "Асталавіста"));
console.log(convertCurrency("100$"));
console.log(getRandomPassword(5));
console.log(deleteLetters("a", "blablabla"));
console.log(isPalindrome("Я несу гусеня"));
console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));
