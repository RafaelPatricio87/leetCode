function distanciaMinima(a) {
    let newArray = []
    for (let index = 0; index < a.length; index++) {
        for (let i = index + 1; i < a.length; i++) {
            if (a[index] == a[i]) {
                newArray.push(Math.abs(index - i))
            }
        }
    }
    if(newArray.length != 0){
        return newArray.sort((a ,b) => a -b)[0]
    }else{
        return -1
    }
}
console.log(distanciaMinima([1, 2, 3, 4, 10]))
console.log(distanciaMinima([3,2,1,2,3]))