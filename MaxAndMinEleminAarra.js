function minValue(arr) {
    let minValue = arr[0];
    for(let i=0;i<=arr.length-1;i++) {
        if(arr[i]<minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}

console.log(minValue([1,34,5,6,67]));
function maxValue(arr) {
    let maxValue = arr[0];
    for(let i=0;i<=arr.length-1;i++) {
        if(arr[i]>maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

console.log(maxValue([1,34,5,6,67]));

function minMaxValue(arr) {
    let minValue = arr[0];
    let maxValue = arr[0];
    for(let i=0;i<=arr.length-1;i++) {
        if(arr[i]<minValue) {
            minValue = arr[i];
        } else if(arr[i]>maxValue) {
            maxValue = arr[i];
        }
    }
    let minMax = [];
    minMax = {minValue, maxValue};
    return minMax;
}
