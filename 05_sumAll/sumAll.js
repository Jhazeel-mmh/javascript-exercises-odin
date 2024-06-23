const sumAll = function(a, b) {
    if (typeof a  !== "number"|| a < 0) return "ERROR";
    if (typeof b !== "number" || b < 0) return "ERROR";


    let mayor, menor;
    if (a > b) {
        mayor = a;
        menor = b;
    } else {  
        mayor = b;
        menor = a;
    }

    let result = 0;
    for (i = menor; i <= mayor; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;


// FOR every number betwen a and b add the m to result (incluyendo a y b)
//  while 1 < 4 
//       1, 2, 3, 4