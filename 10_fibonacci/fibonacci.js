const fibonacci = function(num) {
if (num < 0) return 'OOPS';
if (num === 0) return 0;
let n1 = 0, n2 = 1;
for (let i = 1; i < num; i++){
    const sum = n2;
    n2 = n1 + n2;
    n1 = sum
    }
    return n2;
};

// Do not edit below this line
module.exports = fibonacci;
