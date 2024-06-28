const getTheTitles = function(object) {
    let titles =  object.reduce((array, element) => {
     array.push(element.title);
     return array;
    }, [])
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
