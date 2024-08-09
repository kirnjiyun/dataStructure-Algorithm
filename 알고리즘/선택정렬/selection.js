function SelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        // 나머지 요소들 중에서 최소값의 인덱스를 찾습니다.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // 최소값이 현재 위치에 있지 않으면 교환합니다.
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        // 현재 단계에서의 배열 상태를 출력합니다.
        console.log(`Step ${i + 1}:`, arr);
    }
    return arr;
}

// 예시 실행
let arr = [64, 25, 12, 22, 11];
console.log("Initial array:", arr);
console.log("Sorting process:");
SelectionSort(arr);
console.log("Sorted array:", arr);
