type val = string | number;

function summator(...rest: val[]): val {
    let sum: string | number = '';
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}