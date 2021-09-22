const applePrice = 15.678;
const orangePrice = 123.965;
const bananaPrice = 90.2345;


const maxPrice = Math.max(applePrice, orangePrice, bananaPrice);
const minPrice = Math.min(applePrice, orangePrice, bananaPrice);
const sumPrice = applePrice + orangePrice + bananaPrice; 

const sumPriceFloored = Math.floor(applePrice) + Math.floor(orangePrice) + Math.floor(bananaPrice);
const roundingSumPriceFloored = Math.round(sumPriceFloored / 100) * 100;

const sumOddOrEven = sumPriceFloored % 2;

const remainder = 500 - sumPrice;
const averageValue = +(sumPrice / 3).toFixed(2);

const randomDiscountValue = Math.floor(Math.random() * 101) / 100;

const paymentValue = +(sumPrice - sumPrice * randomDiscountValue).toFixed(2);
const netIncome = Math.trunc(sumPrice) / 2 - Math.round(sumPrice * randomDiscountValue);

console.log(`
Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${sumPrice}
Округлена вартість всіх товарів: ${sumPriceFloored}
Cума товарів округлена до сотень: ${roundingSumPriceFloored}
Визначення парного чи непарного числа: ${sumOddOrEven === 0}
Сума решти: ${remainder}
Cереднє значення цін: ${averageValue}
Сума до оплати: ${paymentValue}
Чистий прибуток: ${netIncome}
`); 
