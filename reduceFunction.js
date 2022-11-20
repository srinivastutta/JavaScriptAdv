const cartValue = [10, 20, 40, 50]

const sum1 =cartValue.reduce((previousValue, currentValue) => { // previousValue(accumulator) not assigned
    return previousValue + currentValue;
});
console.log(sum1); // 120 


const sum2 =cartValue.reduce((previousValue, currentValue) => { // previousValue(accumulator) value assigned as 30
    return previousValue + currentValue;
}, 30);
console.log(sum2); // 120+30 = 150

const value = ['Hello ', 'This ', 'is ', 'Srinivas'];

const concat = value.reduce((p, c) => {
    return p + c; 
});
console.log(value);