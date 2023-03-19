const sumAll = function(start, end) {
    let sum = 0;
    for (i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
//sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
};

// Do not edit below this line
module.exports = sumAll;
