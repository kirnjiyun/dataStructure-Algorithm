function SelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

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
