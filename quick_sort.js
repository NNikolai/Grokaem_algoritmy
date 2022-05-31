// O(n * log n)

const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]

function quick_sort(arr){
    if (arr.length <= 1) {
        return arr
    }

    let midId = Math.floor(arr.length/2),
        start =[],
        end = [],
        mid = arr[midId]

    for (let i = 0; i < arr.length; i++) {
        if(i === midId){
            continue
        }
        if(arr[i] < mid){
            start.push(arr[i])
        } else {
            end.push(arr[i])
        }
    }

    return [...quick_sort(start),mid, ...quick_sort(end)]
}

console.log(quick_sort(arr));