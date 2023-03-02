const findTheOldest = function(age) {
    return age.reduce((total, person) => {
        const oldest = getAge(total.yearOfBirth, total.yearOfDeath);
        const currentPerson = getAge(person.yearOfBirth, person.yearOfDeath);
        return oldest < currentPerson ? person : total;
    });
};

function getAge(birth, dead) {
    if (!dead) {
        dead = new Date().getFullYear();
    }
    return dead - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
