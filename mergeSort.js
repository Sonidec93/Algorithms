export default class MergeSort {

    static sort(arr, l, r) {

        if (l < r) {
            let m = Math.floor((l + r) / 2);

            MergeSort.sort(arr, l, m);
            MergeSort.sort(arr, m + 1, r);

            MergeSort.merge(arr, l, m, r);
        }

    }



    static merge(arr, l, m, r) {

        let L = [], R = [];

        let n1 = m - l + 1;
        let n2 = r - m;

        for (let i = 0; i < n1; i++) {
            L[i] = arr[l + i];
        }
        for (let j = 0; j < n2; j++) {
            R[j] = arr[m + j + 1];
        }

        let i = 0, j = 0;
        let k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }



    }

   static display(arr) {
        console.log(arr);
    }


}

var array = [9, 0, 4, 1, 17, 8, 3];

MergeSort.sort(array, 0, array.length-1);

MergeSort.display(array);