
function getRandomChinese(length) {
    return new Promise (function(resolve) {
        let i = 1;
        let string = '';
    
        while (i <= length) {
            setTimeout(() => {
                const currentTimestamp = Date.now();
                const sign = currentTimestamp % 100000;

                string = string + String.fromCharCode(sign);

                if (string.length === length) {
                    resolve(string);
                }
            }, i * 50);
            
            i++;
        }
    });
}

getRandomChinese(4).then((result) => console.log(result));
