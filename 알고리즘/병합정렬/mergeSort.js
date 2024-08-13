function MergeSort(arr, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);

        // 중간 지점에서 배열을 나누고 재귀적으로 정렬
        MergeSort(arr, leftIndex, midIndex);
        MergeSort(arr, midIndex + 1, rightIndex);

        // 나눠진 배열을 병합
        Merge(arr, leftIndex, midIndex, rightIndex);
    }
}

function Merge(arr, leftIndex, midIndex, rightIndex) {
    let leftAreaIndex = leftIndex;
    let rightAreaIndex = midIndex + 1;
    let tempArr = [];

    // 두 부분 배열을 병합
    while (leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
        if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
            tempArr.push(arr[leftAreaIndex++]);
        } else {
            tempArr.push(arr[rightAreaIndex++]);
        }
    }

    // 왼쪽 부분에 남은 요소가 있으면 추가
    while (leftAreaIndex <= midIndex) {
        tempArr.push(arr[leftAreaIndex++]);
    }

    // 오른쪽 부분에 남은 요소가 있으면 추가
    while (rightAreaIndex <= rightIndex) {
        tempArr.push(arr[rightAreaIndex++]);
    }

    // 정렬된 내용을 원래 배열에 복사
    for (let i = 0; i < tempArr.length; i++) {
        arr[leftIndex + i] = tempArr[i];
    }
}

// 사용 예시
let array = [34, 7, 23, 32, 5, 62];
console.log("Before Sorting:", array);

MergeSort(array, 0, array.length - 1);

console.log("After Sorting:", array);
