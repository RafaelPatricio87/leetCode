let isValidSudoku = function (board) {
    let count = 0
    for (let l = 0; l < board.length; l++) {
        for (let li = 0; li < board[l].length; li++) {
            for (let i = li + 1; i < board[l].length; i++) {
                if (Number(board[l][li]) === Number(board[l][i])) {
                    count++
                }
            }

        }
    }
    
    for(let cl = 0 ; cl < board.length; cl++){
        for(let int = 0; int < board.length; int++){
            for(let a = int+1; a < board.length; a++){
                if(Number(board[int][cl]) === Number(board[a][cl])){
                   count++
                }
            }
        }
    }
    for (let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            console.log(board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * i%3 + j%3])
        }
    }
    
    
    // return count < 1 ? true : false
};


console.log(isValidSudoku([
    ["2", ".", "4", ".", "2","5","7","9","8"],
    ["3", "1", "2", "5", "7","3","1","2","."],
    ["1", "6", "5", "7", "8","2",".","4","3"]]))




// console.log(isValidSudoku([
// [".",".",".",".","5",".",".","1","."],
// [".","4",".","3",".",".",".",".","."],
// [".",".",".",".",".","3",".",".","1"],
// ["8",".",".",".",".",".",".","2","."],
// [".",".","2",".","7",".",".",".","."],
// [".","1","5",".",".",".",".",".","."],
// [".",".",".",".",".","2",".",".","."],
// [".","2",".","9",".",".",".",".","."],
// [".",".","4",".",".",".",".",".","."]]))