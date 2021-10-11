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


// 1 
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

console.log(getSubjects(students[2]));


// 2 
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

console.log(getAverageMark(students[1]));


// 3
function getStudentInfo(student) {

    return { 
        name: student.name,
        course: student.course,
        averageMark: getAverageMark(student)
    }
}

console.log(getStudentInfo(students[2]));

// 4 з forEach
function getStudentsNames(students) {
    let arr = [];
    students.forEach(student => arr.push(student.name));

    return arr.sort();
}

// 4 з методом map
//const getStudentsNames = (students) => students.map(student => student.name).sort();

console.log(getStudentsNames(students));


const maxOfArray = (numArray) => Math.max.apply(null, numArray);
// 5
function getBestStudent(students) {
    const maxAverage = maxOfArray(students.map(student => getAverageMark(student)));

        students.find(student => {
        if (getAverageMark(student) === maxAverage) {
            return student['name'];
        }
    })
}

console.log(getBestStudent(students));