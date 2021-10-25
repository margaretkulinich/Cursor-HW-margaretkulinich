
const getRandomColor = () => {
    const POSSIBLE_COLORS_MAX_NUMBER = 16777215;
    const HEXADECIMAL_SYSTEM_BASE= 16;

    return Math.floor(Math.random() * POSSIBLE_COLORS_MAX_NUMBER).toString(HEXADECIMAL_SYSTEM_BASE);
}

const squaresNumberEdge = (number) => Math.sqrt(number);

function generateBlocks(squaresNumber) {
    const squaresNumberEdgeResult = squaresNumberEdge(squaresNumber);

    if (squaresNumberEdgeResult % 1 || squaresNumberEdgeResult === 0) {
        console.log('Неможливо згенерувати таку кількість квадратів!');
        return;
    }
    
    const outerSquare = document.createElement('div');
    outerSquare.className = 'outerSquare';
    
    for (let i = 0; i < squaresNumberEdgeResult; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.className = "rowContainer";
        
        for (let s = 0; s < squaresNumberEdgeResult; s++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.background = "#" + getRandomColor();
            rowContainer.append(square);
        }

        outerSquare.append(rowContainer);
    }

    document.body.append(outerSquare);
}


function updateSquaresStyle() {
    const squares = document.getElementsByClassName('square');

    for (let square of squares) {
        square.style.background = "#" + getRandomColor();
    }
}

const generateBlocksInterval = () => {
    setInterval(() => updateSquaresStyle(), 1000);
}

generateBlocks(25);
generateBlocksInterval();