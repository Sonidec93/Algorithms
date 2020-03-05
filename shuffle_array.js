const print_array = require('./utility').printArray;
const expect = require('chai').expect;

function shuffle(arr) {
    let shuffled_array = [];
    while (arr.length) {
        let random_index = Math.floor(Math.random() * (arr.length));
        shuffled_array.push(arr.splice(random_index, 1)[0]);
    }
    return shuffled_array;
}



//test case

it('shuffle [3, 4, 5, 6, 7] ',()=>{
    expect([3, 4, 5, 6, 7].toString()).to.be.not.equal(shuffle([3, 4, 5, 6, 7]));
    expect([3, 4, 5, 6, 7].toString()).to.be.not.equal(shuffle([3, 4, 5, 6, 7]));
    expect([3, 4, 5, 6, 7].toString()).to.be.not.equal(shuffle([3, 4, 5, 6, 7]));

    
})

