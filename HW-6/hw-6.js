const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
}];


// 1  повертає список предметів для конкретного студента.
  function getSubjects(student) {
    let arrSubjects = [];

    for (let key in student.subjects) {
        const subject = (key[0].toUpperCase() + key.slice(1))
        .split("_")
        .join(" ");

        arrSubjects.push(subject);
    }

    return arrSubjects;
  }

console.log('Функція 1:', getSubjects(students[2]));


// 2 яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ
function getAverageMark(student) {
    let arrAverageMarks = [];

    for (let key in student.subjects) {
        const marksSubject = student.subjects[key];
        const keyLength = marksSubject.length;
        const averageMarkSubject = marksSubject.reduce((sum, mark) => sum + mark) / keyLength;

        arrAverageMarks.push(averageMarkSubject);
    }

    const averageMark = +(arrAverageMarks.reduce((sum, averageMark) => sum + averageMark) 
        / arrAverageMarks.length)
        .toFixed(2);
    
    return averageMark;
}

console.log('Функція 2:', getAverageMark(students[1]));


// 3 яка повертає інформацію загального виду по переданому студенту 
function getStudentInfo(student) {

    return { 
        name: student.name,
        course: student.course,
        averageMark: getAverageMark(student)
    }
}

console.log('Функція 3:', getStudentInfo(students[2]));


// 4 варіант 1 з forEach, повертає імена студентів у алфавітному порядку
function getStudentsNames(students) {
    let arr = [];
    students.forEach(student => arr.push(student.name));

    return arr.sort();
}


// 4 варіант 2 з методом map, повертає імена студентів у алфавітному порядку
//const getStudentsNames = (students) => students.map(student => student.name).sort();

console.log('Функція 4:', getStudentsNames(students));


/* 5 варіант 1  через reduce, повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = (students) => students.reduce(
  (сurrentStudent, student) => getAverageMark(сurrentStudent) > getAverageMark(student) ? сurrentStudent : student
  ).name;

*/


const maxOfArray = (numArray) => Math.max.apply(null, numArray);
// 5 варіант 2 через метод find & map, повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent(students) {
  const maxAverage = maxOfArray(students.map(student => getAverageMark(student)));

  const findStudent = students.find(student => {
    if (getAverageMark(student) === maxAverage) {
      return student;
    }
  });

  return findStudent.name;
}

console.log('Функція 5:', getBestStudent(students));


// 6 повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(word) {
  const wordLowerCased = word.toLowerCase().split('');
  const result = {};

  wordLowerCased.map(item => !result[item] ? result[item] = 1 : result[item]++);

  return result;
}

console.log('Функція 6:', calculateWordLetters("тест"));