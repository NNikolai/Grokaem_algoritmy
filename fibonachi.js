let count = 0

function fibonachi(n) {
    count +=1
    if (n === 1 || n ===2) {
        console.log(count);
        return 1
    }
    return fibonachi(n-1) + fibonachi(n - 2)
}

console.log(fibonachi(3));