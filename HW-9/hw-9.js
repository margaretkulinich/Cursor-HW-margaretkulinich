class Student {
    constructor(university, course, fullName) {
        this.university = university,
        this.course = course,
        this.fullName = fullName,
        this.marks = [5, 4, 4, 5],
        this._isDismissed = false
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get marksInfo() {
        return !this._isDismissed ? this.marks : null;
    }

    set marksInfo(mark) {
         this.marks.push(mark);
    }

    getAverageMark() {
        if (this.marks === null) {
            return 0;
        }

        return this.marks.reduce((sum, item) => sum + item) / this.marks.length;
    }

    dismiss() {
        this._isDismissed = true;
    }

    recover() {
        this._isDismissed = false;
    }
}


const ostap = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Бендер");
console.log(ostap.getInfo());
console.log(`Cереднє арифметичне: ${ostap.getAverageMark()}`);

// ставлю оцінку
ostap.marksInfo = 5;
console.log(`Cереднє арифметичне з новою оцінкою: ${ostap.getAverageMark()}`); 


class BudgetStudent extends Student {
    constructor(university, course, fullName)  {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 10000);
    }

    getScholarship() {
        if (this.getAverageMark() >= 4 && !this._isDismissed) {
            console.log("Ви отримали 1400 грн стипендії");
        }
    }
}

const vasya = new BudgetStudent("КПІ ім. Ігоря Сікорського", 3, "Пупкін Василь");

console.log(vasya.getInfo());

