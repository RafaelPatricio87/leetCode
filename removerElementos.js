var removeElement = function(nums, val) {
    let k = nums.length
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] == val){
         nums[i] = '_'
          k -= 1 
        }
    }
    nums.sort()
    return k
};
console.log(removeElement([3,2,2,3],3));

// let k=nums.length;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]==val){
//         nums[i] = '_';
//         k-=1;
//     }
// }
// nums.sort();
// console.log(nums,k)
// return k;