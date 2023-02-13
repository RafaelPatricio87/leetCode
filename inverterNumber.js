
let addTwoNumbers = (l1,l2) =>{
    let list1 = l1.reverse().join('');
    let list2 = l2.reverse().join('');
    let soma = parseFloat(list1 ) + parseFloat(list2);
    let inverte = soma.toString().split('').reverse();
 
   return inverte
}

console.log(addTwoNumbers([2,4,3],[5,6,4]));
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))
