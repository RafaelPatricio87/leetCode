var mergeTwoLists = function (list1, list2) {

    let result = []

    while (list1.length && list2.length) {
        const next = (list1[0] < list2[0] ? list1.shift() : list2.shift());
        console.log(next)
        result.push(next)
    }
    if (list1.length) {
        result = result.concat(list1)
    } else if (list2.length) {
        result = result.concat(list2)
    }
    return result
};
console.log(mergeTwoLists([1, 2, 4], [2, 3, 4]))

// let novoArray = list1.concat(list2)
// novoArray.sort((a,b) => {
//     return a - b
// })
// return novoArray