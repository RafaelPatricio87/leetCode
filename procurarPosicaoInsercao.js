var searchInsert = function (nums, target) {
    let verifica = nums.indexOf(target)
    if (verifica >= 0) {
        return verifica
    } else {
        let novoArr = [...nums, target].sort((a, b) => a - b)
        return novoArr.indexOf(target)
    }
};
console.log(searchInsert([1, 3, 5, 6], 10))