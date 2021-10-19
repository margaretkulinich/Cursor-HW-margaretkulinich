const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


//1
const getRoundedNum = (number) => Math.round(number * 100) / 100;

function getMyTaxes(salary) {
    return getRoundedNum(this.tax * salary);
}

console.log(getMyTaxes.call(latvia, 1000));


//2
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(latvia));


//3
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(latvia));


//4 
const getRandomSalary = (max = 2000, min = 1500) => Math.floor(Math.random() *(max - min + 1)) + min;

function getMySalary(country) {
    const tax = getMyTaxes.call(country, getRandomSalary());

    return {
        salary: getRandomSalary(),
        taxes: tax,
        profit: getRandomSalary() - tax
    };
}

setInterval(() => {
    console.log(getMySalary(ukraine));
}, 10000);