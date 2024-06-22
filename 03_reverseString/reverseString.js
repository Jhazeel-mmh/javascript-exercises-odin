const reverseString = function(text) {
    if (text === "") return text;

    temp_text = [];
    for (let c of text) {
        temp_text.unshift(c);
    }
    
    return temp_text.join("");
};

// Do not edit below this line
module.exports = reverseString;
