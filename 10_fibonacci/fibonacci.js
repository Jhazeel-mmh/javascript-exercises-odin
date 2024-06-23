const fibonacci = function(position) {
    if (position == 0) return 0;
    if (position < 0) return "OOPS";
    sequ = [1, 1, 2, 3, 5, 8]
    for (let i = 0; i <= position; i++){
        if (sequ[i + 1] === undefined){
            sequ.push(sequ[i] + sequ[i - 1]);
        }
    }
    return sequ[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
