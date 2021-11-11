function* createIdGenerator() {
    for(let i = 1;; i++) yield i;
}

const idGenerator = createIdGenerator();

console.log(`First value: ${idGenerator.next().value}`);
console.log(`Second value: ${idGenerator.next().value}`);
console.log(`Third value: ${idGenerator.next().value}`);

function* newFontGenerator(size) {
    
    while (true) {
        let fontSize = yield size;
        
        if(fontSize === 'up') {
            size += 2;
        }

        if(fontSize === 'down' && size >= 2) {
            size -= 2;
        }
    }
}

const fontGenerator = newFontGenerator(14);

console.log(`up: ${fontGenerator.next("up").value}`);
console.log(`up: ${fontGenerator.next("up").value}`);
console.log(`up: ${fontGenerator.next("up").value}`);
console.log(`unchandged:  ${fontGenerator.next().value}`);
console.log(`down: ${fontGenerator.next("down").value}`);
console.log(`down: ${fontGenerator.next("down").value}`);
console.log(`down: ${fontGenerator.next("down").value}`);
console.log(`unchandged:  ${fontGenerator.next().value}`);