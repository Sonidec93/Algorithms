class QuickSort {

    constructor(array) {
        this.arr = array;
    }

    sort(l, r) {
        if (l < r) {
            let middle = this.partition(l, r);
            this.sort(l, middle);
            this.sort(middle + 1, r);
        }

    }

    partition(l, r) {
        let pivot = l;
        let i = l, j = r;

        while (i < j) {
            do {
                i++;
            } while (this.arr[i] <= this.arr[pivot]);

            do {
                j--
            } while (this.arr[j] > this.arr[pivot]);

            if (i < j) {
                this.swap(i, j);
            }
        }

        this.swap(pivot, j);

        return j;


    }

    swap(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
        return;
    }

    display() {
        console.log(this.arr);
    }

}

var array = [6, 3, 0, 1, 9, 2, 14];
var quickSort = new QuickSort(array);
quickSort.sort(0, array.length - 1);
quickSort.display();