function fibonacci(n) {
    if (n == 0 || n == 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacci2(n, memo = {}) {
    if (n == 0 || n == 1) return n;
    if (memo[n] == null) {
        memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
    }
    return memo[n];
}

// 타뷸레이션을 사용한 피보나치 계산
function fibonacci3(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    let fibTable = new Array(n + 1);
    fibTable[0] = 0; // F(0)
    fibTable[1] = 1; // F(1)

    // F(2)부터 F(n)까지 순차적으로 계산
    for (let i = 2; i <= n; i++) {
        fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
    }

    return fibTable[n];
}

let start = new Date();
console.log(fibonacci(6)); // 피보나치 결과 출력
let end = new Date();
console.log(`피보 실행 시간: ${end - start}ms`);

let start2 = new Date();
console.log("튜", fibonacci2(6)); // 피보나치 메모이제이션 결과 출력
let end2 = new Date();
console.log(`피보2 실행 시간: ${end2 - start2}ms`);

let start3 = new Date();
console.log("타뷸", fibonacci3(6)); // 피보나치 타뷸레이션 결과 출력
let end3 = new Date();
console.log(`피보3 실행 시간: ${end3 - start3}ms`);
//타뷸레이션(fibonacci3):
// 이 함수는 피보나치 수열을 반복문을 통해 계산합니다.
// fibTable이라는 배열을 만들어 F(0)과 F(1) 값을 초기화합니다.
// 이후 반복문을 사용해 F(2)부터 F(n)까지 차례대로 계산하여 배열에 저장합니다.
// 마지막으로 fibTable[n] 값을 반환하여 결과를 얻습니다.
// 이 방식은 재귀 호출 없이, 각 하위 문제를 한 번씩만 계산하므로 매우 효율적입니다.
