// Домашнє завдання по темі Функції

// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
const getMaxDigit = (n) => +Math.max(...(n + '').split(''));
console.log(getMaxDigit(3426567474325));

// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
const getDegree = (n, d) => {
    let r = n;
    for (let i = 1; i < d; i++) {
        r *= n;
    }
    return r;
}
console.log(getDegree(2,5));

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
const getName = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
console.log(getName('oLEG'));

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
const getSum = (p) => {
    return p - (p * 19.5 / 100) ;
}
console.log(getSum(1000));

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
const getRandom = (n, m) => {
    return Math.floor(Math.random() * (m - n)) + n
}
console.log(getRandom(1,10));

// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
const countLetter = (s, str) => {
    
    return str.split(s).length -1;
   
}
console.log(countLetter('а','Асталавіста'));

// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

const convertCurrency = (pr) => {
    const cur = pr.replace(/[0-9]/g, ''),
        n = pr.replace(/[^0-9]/g, ''),
        course = 25
    if (cur === '$') {
        return n * course;
    } else if(cur === 'UAH' || cur === 'uah') {
        return n / course ;
    } else {
        return 'none';
    }
}
console.log(convertCurrency('2500uah'));


// 8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

const getRandomPassword = (l) => {
    l = l ? l : 8
    let r = '';
    for (let i = 0; i < l; i++) {
        r += getRandom(1,10);
    }
    return r;

}
console.log(getRandomPassword(4));

// 9. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
const deleteLetters = (s, str) => {
    return str.split(s).join('');
   
}
console.log(deleteLetters('a', "blablabla"));

// 10. Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
const isPalyndrom = (str) => {
    const s1 = str.split(' ').join('').toLowerCase(),
        s2 = s1.split("").reverse().join(""),
        s3 = str.split(' ').join('').toLowerCase()

    if (s3 === s2) {
        return true;
    }
    return false;
}
console.log(isPalyndrom("мадам"));
console.log(isPalyndrom("кокос"));
console.log(isPalyndrom("Я несу гусеня"));

// 11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

const deleteDuplicateLetter = (string) => {
	const str = string.toLowerCase();
	let result = "";
 
	for (let i = 0; i < str.length; i++) {
	  if (str.replaceAll(str[i], "").length === str.length - 1) {
		 result += str[i];
	  }
	}
	return result;
 };

 console.log(`№1: ${getMaxDigit(3426567474325)}`);
 console.log(`№2: ${getDegree(2, 5)}`);
 console.log(` №3: ${getName('olEG')}`);
 console.log(` №4: ${getSum(1000)}`);
 console.log(` №5: ${getRandom(1, 10)}`);
 console.log(` №6: ${countLetter('а', 'Асталавіста')}`);
 console.log(` №7: ${convertCurrency('2500uah')}`);
 console.log(` №8: ${getRandomPassword(4)}`);
 console.log(` №9: ${deleteLetters('a', 'blablabla')}`);
 console.log(` №10: ${isPalyndrom('Я несу гусеня')}`);
 console.log(` №11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`);














