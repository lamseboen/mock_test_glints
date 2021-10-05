const checkBracket = str => {
    let cekKurung = 0
    let cekSiku = 0
    let cekCurly = 0

    for (let i = 0; i < str.length; i++) {

        if (str[i] == '(') {
            cekKurung++
        } else if (str[i] == '[') {
            cekSiku++
        } else if (str[i] == '{') {
            cekCurly++
        } else if (str[i] == ')') {
            cekKurung--
        } else if (str[i] == ']') {
            cekSiku--
        } else if (str[i] == '}') {
            cekCurly--
        }

        if (cekKurung < 0 || cekSiku < 0 || cekCurly < 0) {
            break;
        }
    }

    if (cekKurung == 0 && cekSiku == 0 && cekCurly == 0) {
        return true
    } else {
        return false
    }

}


console.log(checkBracket('({[})]'))
// console.log(checkBracket('({[]})'))
console.log(checkBracket('([][]{})'))
// console.log(checkBracket('({}(]{[}'))
// console.log(checkBracket('[)()]'))

// console.log(checkBracket('[)(]'))