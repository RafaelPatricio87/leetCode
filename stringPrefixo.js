let longestCommonPrefix = function (strs) {
    let prefix = "";

    for(let i = 0; i < strs[0].length; i++){
        let char = strs[0][i]

      for(let j = 1; j < strs.length; j++){
        if(char !== strs[j][i]) return prefix;
      }
      prefix += char
    }
   return prefix
};
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))