// given an array make a new array in whcih every element is multiple  of 2
const input = [1 , 4 , 6  , 9];

function transform(i){
    return 2 * i;
}
const ans = input.map(transform);
console.log(ans);
// or it can also be done as
const ans2 = input.map(function(i){
    return i * 2;
})
console.log(ans2);
// Now we are going to filter

// now i want to filter all the even elements from it 

const ans3 = input.filter(function(i){
    if(i%2 == 0) return true; 
})
console.log(ans3);
