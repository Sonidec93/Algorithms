class BubbleSort {
    constructor(arr) {
        this.array = arr;
    }

    sort() {
        for (let i = 0; i < this.array.length - 1; i++) {
            for (let j = 0; j < this.array.length - i - 1; j++) {
                if (this.array[j] >= this.array[j + 1]) {
                    this.swap(j, j + 1);
                }
            }
        }
        return this;
    }

    swap(index1, index2) {
        let temp = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = temp;
        return;
    }

    display(){
        console.log(this.array);
    }

}


var a=[3,5,0,-1,2]
let example1=new BubbleSort(a); //TimeComplexity of O(n^2) Space complexity o(n)
example1.sort().display();
