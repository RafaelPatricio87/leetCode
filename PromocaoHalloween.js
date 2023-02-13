function howManyGames(p,d,m,s){
    let qtdGames = 0;
    let dinheiro = s
    
    if(dinheiro < p){
        return 0
    }else { 
    for(let index = p ; index > m; index= index - d){
        if(dinheiro >= index){
            dinheiro =  dinheiro - index
            qtdGames++
        }else{
            return qtdGames
        }
    }
}

    while(dinheiro >= m){
        dinheiro = dinheiro - m;
        qtdGames++
    }
    console.log(qtdGames)
     return qtdGames
}

console.log(howManyGames(100,19,1,180))