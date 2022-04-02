// create a function luckyNumber that will receive a number as a parameter and return if it is a lucky
// number or not.
// A lucky number must match these conditions:
// it is positive
// it is a multiple of 2 or 3
// it is not 15

const luckyNumber = (x) => {

    if ( (x > 0) && (x % 2 || x % 3) && (x !== 15)) {
        result = `Lucky number`
    }
         else {
             result = `Not Lucky number`;
    }
    return (result);
};

console.log(luckyNumber(15));


