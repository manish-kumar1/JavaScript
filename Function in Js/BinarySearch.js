
// function
// input -> integer array and target
// output -> index where target will found

function findTarget(array, target){
    let l = 0;
    let r = 5;

    while(l <= r){

        let mid = l + (r - l) / 2;
        if(array[mid] === target){
            return mid;
        }
        else if(array[mid] < target){
            l = mid + 1;
        }
        else{
            r = mid - 1;
        }
    }
    return -1;
}

let array = [1, 2, 3, 4, 5, 6];
let ans = findTarget(array, 5);
console.log(ans);