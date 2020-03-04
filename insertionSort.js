const expect = require('chai').expect;

function insertionSort(arr, n) {

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr

}


//test cases

it('[2,3,4,5,6,7] to be [2,3,4,5,6,7]', () => {
    expect(insertionSort([2, 3, 4, 5, 6, 7], 6).toString()).equals([2, 3, 4, 5, 6, 7].toString())
})


it('[9,8,7,6,5] to be [5,6,7,8,9]', () => {
    expect(insertionSort([9, 8, 7, 6, 5], 5).toString()).equals([5, 6, 7, 8, 9].toString())
})

it('[19,8,17,60,5,43] to be [5,8,17,19,43,60]', () => {
    expect(insertionSort([19, 8, 17, 60, 5, 43], 6).toString()).equals([5, 8, 17, 19, 43, 60].toString())
})
