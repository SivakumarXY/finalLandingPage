function findLargestAndSecondLargest() {
    let createNumber = [5, 2, 3, 4, 5];

    let largest = 0;
    let secondLargest = 0;

    for (let i = 0; i < createNumber.length; i++) {

        if (createNumber[i] > largest) {
            secondLargest = largest;      // move old largest
            largest = createNumber[i]; 
            
            console.log(largest);
            // update largest
        }

        else if (createNumber[i] < largest && createNumber[i] > secondLargest) {
            secondLargest = createNumber[i]; // update second largest
        }
    }

    return secondLargest ;
}

console.log(findLargestAndSecondLargest());

