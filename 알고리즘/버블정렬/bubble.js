function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 두 요소를 교환합니다.
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 예시 실행
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(BubbleSort(arr));
