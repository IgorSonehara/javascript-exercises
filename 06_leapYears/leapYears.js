const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

/*
> Leap years are years divisible by four (like 1984 and 2004). However, 
years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)

leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false

- use an `if` statement and `&&` to make sure all the conditions are met properly
*/