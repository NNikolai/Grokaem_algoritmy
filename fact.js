// 
let count = 0
function factorial(value) {
    count += 1
    if (value === 1) {
        console.log(count);
        return 1
    }

    return value * factorial(value - 1)
}
console.log(factorial(9));