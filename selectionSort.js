const utility = require('./utility');

class SelectionSort {
    constructor(array) {
        this.arr = array;
    }

    sort() {
        let n = this.arr.length;
        for (let i = 0; i < n; i++) {
            let min_ind = i;

            for (let j = i + 1; j < n; j++) {
                if (this.arr[min_ind] > this.arr[j]) {
                    min_ind = j;
                }
            }
            this.swap(min_ind, i);

        }
    }

    swap(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

}

var array = [6, 8, 0, 2, 19, 0];

new SelectionSort(array).sort(); //Time Complexity is O(n^2)

utility.printArray(array);

