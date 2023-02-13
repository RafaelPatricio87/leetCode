let romanToInt = function (s) {
    let resultado = 0
    let romanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let num = s.split('')
    let count = 0
    while (count < s.length) {
        if (s[count ] == 'C' && s[count + 1] == 'D' || s[count ] == 'C' && s[count + 1] == 'M') {
            resultado += romanos[s[count + 1]] - romanos[s[count]]
            count = count+ 2
        }else if(s[count ] == 'X' && s[count + 1] == 'L' || s[count ] == 'X' && s[count + 1] == 'C'){
            resultado += romanos[s[count + 1]] - romanos[s[count]]
            count = count+ 2
        }else if(s[count ] == 'I' &&  s[count + 1] == 'V' || s[count ] == 'I' &&  s[count + 1] == 'X'){
            resultado += romanos[s[count + 1]] - romanos[s[count]]
            count = count+ 2
        }
        else {
            resultado += romanos[s[count]]
            count++
        }
    }
    return resultado
}
console.log(romanToInt("LVIII"))