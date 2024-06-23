const palindromes = function (text) {
    temp = []
    tempTwo = []
    for (let c of text.toLowerCase()){
        let char = c.charCodeAt(0);
        if ((char >= 32 && char <= 47) || (char >= 58 && char <= 64) ||
            (char >= 91 && char <= 96)){
            continue;
        }
        temp.unshift(c);
        tempTwo.push(c);
    }
    return (temp.join("") === tempTwo.join(""));
};

// Do not edit below this line
module.exports = palindromes;

