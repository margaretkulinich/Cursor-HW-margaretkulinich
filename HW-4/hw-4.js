const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1 
function getPairs(students) {
    const arrMale = [];
    const arrFemale = [];
    const result = [];

    for (let i = 0; i < students.length; i++) {
        let arrItem = students[i];

        if (arrItem.endsWith('а')) {
            arrFemale.push(arrItem);
        } else {
            arrMale.push(arrItem);
        }
    }

    for (let i = 0; i < arrMale.length; i++) {
        result.push([arrMale[i], arrFemale[i]]);
    }

    return result;
}


// 2
function getProjectThemes(result, themes) {
    const arr = result.map(item => item.join(' і '));
    const pairsWithThemes = arr.map((item, i) => [item, themes[i]]);
    
    return pairsWithThemes;
}


// 3 перший спосіб, без використання map
function getMarks() {
    const studenstMarks = [];

    for (let i = 0; i < students.length; i++) {
        studenstMarks.push([students[i], marks[i]]);
    }

    return studenstMarks;
}

// 3 другий спосіб
// const getMarks = (students, marks) => students.map((student, i) => [student, marks[i]]);


// 4 
function getPairsWithRandomMarks(pairsWithThemes) {
    const minMark = 1;
    const maxMark = 5;
    const pairsWithRandomMarks = [... pairsWithThemes];

    pairsWithThemes.forEach(element =>
        element.push(Math.floor(Math.random() * (maxMark - minMark + 1)) + minMark)
    );
    
    return pairsWithRandomMarks;
}

const pairs = getPairs(students);
const pairsWithThemes = getProjectThemes(pairs, themes);
const studenstMarks = getMarks();
const pairsWithRandomMarks = getPairsWithRandomMarks(pairsWithThemes);

console.log(pairs);
console.log(pairsWithThemes);
console.log(studenstMarks);
console.log(pairsWithRandomMarks);