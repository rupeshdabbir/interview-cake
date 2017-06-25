/**
 * Created by rdabbir on 6/23/17.
 * https://www.interviewcake.com/question/javascript/highest-product-of-3
 */

// function highestProduct(arr) {
//     let prod1=arr[0], prod2=arr[1], prod3;
//
//     arr.forEach((val,i)=> {
//        if(val > prod1)
//            prod1 = arr[0];
//        else if(val < prod1 || val > prod2) {
//            prod2 = val;
//        } else if(val < prod2) {
//            prod3 = val;
//        }
//
//     });
//
//     return prod1*prod2*prod3;
//
// }

function productOfThreeNum(arr){
    if(arr.length < 3){
        throw new error("Array must have three numbers");
    }

    let highest = Math.max(arr[0], arr[1]);
    let lowest= Math.min(arr[0], arr[1]);

    let highestTwo = arr[0] * arr[1];
    let lowestTwo = arr[0] * arr[1];

    let highestProduct3 = arr[0] * arr[1] * arr[2];

    for(let i=2; i<arr.length; i++){
        let current = arr[i];


        //compute highest of three

        highestProduct3 = Math.max(highestProduct3, current * highestTwo, current * lowestTwo);

        //compute highest of two

        highestTwo  = Math.max(highestTwo, current * highest, current * lowest);

        lowestTwo = Math.min(lowestTwo, current*highest, current*lowest);

        // Do we have new highest

        highest = Math.max(highest, current);
        lowest = Math.min(lowest, current);

    }

    return highestProduct3;

}