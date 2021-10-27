// (!) Домашні завдання потрібно здавати у вигляді сторінки на GITPAGES. Відео про те, як здавати ДЗ

// Створіть 3 об'єкти, що описують країни:

// const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
// const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
// const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
// Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
// Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;


const ukraine = {
	tax: 0.195,
	middleSalary: 1789,
	vacancies: 11476
};
const latvia = {
	tax: 0.25,
	middleSalary: 1586,
	vacancies: 3921
};
const litva = {
	tax: 0.15,
	middleSalary: 1509,
	vacancies: 1114
};


function getMyTaxes(salary) {
	return this.tax * salary
};

function getMiddleTaxes(salary = this.middleSalary) {
	return (this.tax * salary).toFixed(2)
};

function getAllTaxes(salary = this.middleSalary, vacancies = this.vacancies) {
	return (this.tax * salary * vacancies).toFixed(2)
};



function getMySalary(country){
	const getRandomSalary = (max = 2000, min = 1500) => Math.floor(Math.random() * (max - min + 1) + min);
	const tax = +getMyTaxes.call(country, getRandomSalary()).toFixed(2);
	const profit = +(getRandomSalary() - tax).toFixed(2);
	
	return {
		 salary: getRandomSalary(),
		 taxes: tax,
		 profit: profit
	};
};

setInterval(() => {
	console.log(getMySalary(ukraine));
}, 10000);

console.log(`Налог в Украине: ${getMyTaxes.call(ukraine, 1000)} з 1000`);
console.log(`Налог в Латвии: ${getMyTaxes.call(latvia, 1000)} з 1000`);
console.log(`Налог в Литве: ${getMyTaxes.call(litva, 1000)} з 1000`);

console.log(`Средний налог ІТ спеціаліста, Украина: ${getMiddleTaxes.call(ukraine)}`);
console.log(`Средний налог ІТ спеціаліста, Латвия: ${getMiddleTaxes.call(latvia)}`);
console.log(`Средний налог ІТ спеціаліста, Литва: ${getMiddleTaxes.call(litva)}`);

console.log(`Всего налог в Украине: ${getAllTaxes.call(ukraine)}`);
console.log(`Всего налог в Латвия: ${getAllTaxes.call(latvia)}`);
console.log(`Всего налог в Литва: ${getAllTaxes.call(litva)}`);
console.log(getMySalary(ukraine));
