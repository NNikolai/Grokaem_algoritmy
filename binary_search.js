// O(log n)
const arr = [-5, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 32, 35]

function binarySearch(arr, value, start = 0, end = arr.length - 1){
    let mid = Math.floor((start + end)/2)
    if(value === arr[mid]){
        return mid
    }
    if (value > arr[mid]) {
        return binarySearch(arr, value, mid + 1, end)
    } else {
        return binarySearch(arr, value, start, mid - 1)
    }
}

console.log(binarySearch(arr, 32));