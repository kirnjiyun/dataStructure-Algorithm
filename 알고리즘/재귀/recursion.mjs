function myFunction(num) {
    console.log(num);
    myFunction(num + 1);
}
myFunction(1);
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(7)); // 출력: 13
