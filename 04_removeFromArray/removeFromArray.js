const removeFromArray = function(array, ...theArgs) {
    return array.filter(x => !theArgs.includes(x));
};



// Do not edit below this line
module.exports = removeFromArray;
