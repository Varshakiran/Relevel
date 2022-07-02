function minValue(arr) {
    let minValue = arr[0];
    for(let i=0;i<arr.length-1;i++) {
        if(arr[i]<minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}

console.log(minValue([1,34,5,6,67]));