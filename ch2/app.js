const findSmall = (arr) => {
    let small = arr[0];
    let small_id = 0;
    for (let id = 1; id < arr.length; id++) {
        if (small > arr[id]) {
            small = arr[id]
            small_id = id
        }
    }
    return small_id;
}

const sortArr = (arr) => {
    let newArr = []
    let copyArr = arr.slice()
    while (copyArr.length > 0) {
        newArr.unshift(...copyArr.splice(findSmall(copyArr), 1))
    }
    console.log(arr);
    return newArr
}

console.log(sortArr([3,5,6,2,10,15]));