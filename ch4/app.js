const sum = (arr) => {
    return arr.length === 0 ? 
        0 
        : 
        arr[0] + sum(arr.slice(1))
}

const count = (arr) => {
    return arr.length === 0 ? 
        0 
        : 
        1 + count(arr.slice(1))
}

const findMax = (arr) => {
    if (arr.length === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1]
    }
    let max = findMax(arr.slice(1))
    return arr[0] > max ? arr[0] : max;
}

const exp =[11,2,3,4,5]

console.log(sum(exp))
console.log(count(exp))
console.log(findMax(exp));