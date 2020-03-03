const expect = require('chai').expect;
const describe = require('mocha').describe;
function second_largest(arr) {

    let largest = second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        }
        else if (arr[i] > second && arr[i] != largest) {
            second = arr[i];
        }
    }
    return second;
}


//test cases
it('8, 4, 5, 3, 0]', function () {
    expect(second_largest([8, 4, 5, 3, 0])).to.be.eq(5, 'failed test case 1');

})

it('[4, 53, 10000, 2, -1, 67, 333, 333]', function () {
    expect(second_largest([4, 53, 10000, 2, -1, 67, 333, 333])).to.be.eq(333, 'failed test case 2');

})

// 



console.log('All test case passed');