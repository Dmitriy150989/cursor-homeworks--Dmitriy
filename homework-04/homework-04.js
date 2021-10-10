// (!) Домашні завдання потрібно здавати у вигляді сторінки на GITPAGES. Відео про те, як здавати ДЗ


// Кожне завдання виконується у вигляді чистої функції. Функція повертає масив або інше значення, але не змінює його!
// У консоль/html виводите результат виклику функції:
// const pairs = getPairs(students);
// console.log(pairs);

// Перед виконанням цього домашнього завдання необхідно створити 3 масиви:
// const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
// const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
// const marks = [4, 5, 5, 3, 4, 5];


//1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
//2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
//3 Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
//4 Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]




const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1..

// const getPairs = (students) => {
// 	const firstPair = [students[0], students[2]];
// 	const secondPair = [students[1], students[3]];
// 	const thirdPair = [students[4], students[5]];
// 	const pairs = [firstPair, secondPair, thirdPair];

// 	return pairs;
// }

// 1.2


const getPairs = (students) => {
	const mans = [];
	const women = [];

	for (let student of students) {
		 if (char.endsWith("а")) {
			  women.push(student);
		 } else {
			  mans.push(student);
		 };
	};

	const pairs = [];
	for (let i = 0; i < mans.length; i++) {
		 pairs.push(([mans[i]]).concat(women[i]));
	};

	return pairs	
};
console.log(getPairs(students));



//2.. 

const getThemesPairs = (pairs, themes) => {
	const unitedPairs = pairs.map(pair => pair.join(' і '));
	const themesPairs = unitedPairs.map((pair, i) => [pair, themes[i]]);

	return themesPairs;
}

//3..
const getStudentsMarks = (students, marks) => students.map((student, i) => [student, marks[i]]);

//4 ..
const getThemesPairsAndMarks = (themesPairs) => themesPairs.map((themePair) => [...themePair, Math.round(Math.random() * (5 - 1) + 1)]);



const pairs = getPairs(students);
console.log(pairs);

const themesPairs = getThemesPairs(pairs, themes);
console.log(themesPairs);

const studentsMarks = getStudentsMarks(students, marks);
console.log(studentsMarks);

const themesPairsAndMarks = getThemesPairsAndMarks(themesPairs, marks);
console.log(themesPairsAndMarks);











