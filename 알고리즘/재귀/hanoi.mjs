hanoi(3, "A", "C", "B");
// 3개의 원반 에이에서 씨로 옮기는데 비를 거쳐간다.
function hanoi(n, from, to, via) {
    if (n === 1) {
        console.log(`Move disk 1 from ${from} to ${to}`);
    } else {
        hanoi(n - 1, from, via, to);
        console.log(`Move disk ${n} from ${from} to ${to}`);
        hanoi(n - 1, via, to, from);
    }
}

// 예시 실행
hanoi(3, "A", "C", "B");
