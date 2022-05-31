const binarySearch = (arr, value) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = (low + high) / 2;
        if (arr[mid] === value) {
            return mid
        }
        if (arr[mid] > value) {
            high = mid - 1
        } 
        if (arr[mid] < value) {
            low = mid + 1
        }
    }
    return -1;
}

const list = [11,52,67,89,102,265,333]

console.log(binarySearch(list, 11))