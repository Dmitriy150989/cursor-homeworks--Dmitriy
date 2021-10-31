// (!) Домашні завдання потрібно здавати у вигляді сторінки на GITPAGES. Відео про те, як здавати ДЗ

// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.

// У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
// Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
// Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
// Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
// Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
// Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
// Створіть метод this.recover, який дозволить поновити студента

// Advanced

// Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
// Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )


class Student{
	constructor(_university, _course, _fullName, _marks){
		 this.university = _university;
		 this.course = _course;
		 this.fullName = _fullName;
		 this.marks = _marks;
	}

	getInfo(){
		 return `Student ${this.course}st course ${this.university}, ${this.fullName}`;
	}
	
	get getMarks(){
		 if(this.isExpelled) return null;
		 return this.marks;
	}
	
	set setMarks(newMark){
		 if(this.isExpelled) return null;
		 return this.marks.push(newMark);
	}

	getAverageMark(){
		 return this.getMarks.reduce((acc, item) => acc + item)/this.getMarks.length;
	}

	dismiss(){
		 this.isExpelled = true;
	}

	recover(){
		 this.isExpelled = false;
	}
}

class BudgetStudent extends Student{
	constructor(_university, _course, _fullName, _marks, _scholarship){
		 super(_university, _course, _fullName, _marks);
		 this.scholarship = _scholarship;
		 setInterval(() => {
			  console.log(this.getScholarship());
		 }, 30000);
	}
	
	getScholarship(){
		 if(!this.getMarks) return "You are dismissed";
		 if(this.getAverageMark() >= 4){
			  return `Ви отримали ${this.scholarship} грн. стипендії`;
		 } else {
			  return "Your average mark should be 4 or more.";
		 }
	}
}

const student1 = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер", [5, 4, 4, 5]);



console.log("Properties of student:");
console.log(student1);
console.log("Information about student:");
console.log(student1.getInfo());
console.log("Student marks:");
console.log(student1.marks.join(","));
console.log("Student new marks:");
student1.setMarks = 5;
console.log(student1.marks.join(","));
console.log("Student average mark:");
console.log(student1.getAverageMark());
console.log("Student is dismissed:");
student1.dismiss();
console.log("Trying to give a new mark to dismissed student:")
student1.setMarks = 3;
console.log(student1.getMarks);
console.log("Student is recovered:");
student1.recover();
student1.setMarks = 3;
console.log(student1.getMarks);

