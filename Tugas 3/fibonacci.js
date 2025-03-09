const fibonacci = (angka) => {
    const winata = [0, 1];
    for (let i = 2; i < angka; i++) {
        winata(winata[i - 1] + winata[i - 2]);
    }
    return winata;
};

console.log(fibonacci(10));