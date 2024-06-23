const removeFromArray = function(myArray, ...targets) {
    return myArray.filter( arrayelement => !targets.includes(arrayelement))
}


// Do not edit below this line
module.exports = removeFromArray;

/* older solution
const removeFromArray = function(myArray, ...indexTarget) {
    let count = 0;
    if (myArray.length === indexTarget.length){
        for (let i = 0; i < myArray.length; i++){
            if (myArray[i] === indexTarget[i]){
                count++;
            }
        }
        if (count === myArray.length){
            return [];
        }
    }

    let target1 = indexTarget[0] || null,
        target2 = indexTarget[1] || null,
        result = [];

    for (let i = 0; i < myArray.length; i++){
        if (!(myArray[i] === target1 || myArray[i] === target2)){
            result.push(myArray[i])
        }
    }
    return result;
};
*/