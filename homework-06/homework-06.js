// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArray = (length, min, max) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(getRandom(min, max))
    }
    return arr
}
console.log(getRandomArray(15, 1, 100));

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const numbersInt = (numbers) =>  numbers.filter(n => Number.isInteger(n) ?  n : 0)

const getAverage = (...numbers) => {
    numbers = numbersInt(numbers);
    return numbers.reduce((a, b) => a + b ) / numbers.length
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getMedian = (...numbers) => {
    numbers = numbersInt(numbers);
    numbers = numbers.sort((a, b) => a - b);
    const i = numbers.length / 2;
    return i % 1 == 0 ? (numbers[i - 1] + numbers[i]) / 2 : numbers[Math.floor(i)];
}
console.log(getMedian(1, 2, 3, 4));

// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumbers = (...numbers) =>  numbers.reduce((a, b) => a + (b > 0 ? 1 : 0));
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));




// Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
const divideByThree = (word) => word.replace(' ', '').toLowerCase().match(/.{1,3}/g);
console.log(divideByThree('Comma nder'));

// 8 - Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
function replaceBadWords(string) {
  const shitWords = ['shit', 'fuck', 'asshole'];
  let result = string;

  for (let word of shitWords) {
    let length = word.length;
    let star = '*'.repeat(length);
    if (string.toLowerCase().includes(word)) {
      result = result.toLowerCase().replaceAll(word.toLocaleLowerCase(), star);
      
    }
  };
  result = result[0].toUpperCase() + result.slice(1);
  for (let i = 1; i < result.length - 1; i++) {
    if (result[i] === '?' || result[i] === '!' || result[i] === '.' ) {
      result = result.replace(result[(i + 2)], result[(i + 2)].toUpperCase());
    }
  }
  return result;
}
const onlyGoodWords = replaceBadWords("Are you fucking kidding, shit, fuck? He's an asshole, but you'll get used to it. Shit, shit, fuck!");
console.log(onlyGoodWords);




