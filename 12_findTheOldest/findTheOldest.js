const findTheOldest = function(obj) {
    let olderPerson =  obj.reduce((person1, person2) => {
        let currentYear = new Date().getFullYear()
        let agePerson1 = (person1.yearOfDeath || currentYear) - person1.yearOfBirth;
        let agePerson2 = (person2.yearOfDeath || currentYear) - person2.yearOfBirth;
        if (agePerson1 < agePerson2) return person2;
        return person1;           
    })
    return olderPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
