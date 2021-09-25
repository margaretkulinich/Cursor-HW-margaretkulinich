let n = +prompt("Введіть число", 0);

if (!isNaN(n) && (n % 1 === 0)) {
    let m = parseInt(prompt("Введіть число", 0));

    if (!isNaN(m) && (n % 1 === 0)) {
        const skipEvenNumbers = confirm("Чи потрібно пропускати парні числа?");
        let sum = 0;
        let from = (n <= m) ? n : m;
        let to = (n <= m) ? m : n;

        for (i = from; i <= to; i++) {
            if (skipEvenNumbers && (i % 2 === 0)) {
                continue;
            } else {
                sum += i;
            }
        }

        alert(sum);
    }
}
