/**
 * Created by rdabbir on 6/23/17.
 * https://www.interviewcake.com/question/javascript/product-of-other-numbers
 * Product of all numbers except itself.
 */

function productAllNumbers(arr){

    let temp = [], product =1;

    for(let i=0; i<arr.length; i++) {
        temp [i] = product;
        product *= arr[i]; // product = product * arr[i];
    }

    product = 1;

    for(let i=arr.length-1; i>=0; i--){
        temp[i] *= product; //temp[i] = temp[i] * product;
        product *= arr[i]; //product = product * arr[i];
    }

    return temp;

}

// Input => Output analysis.
// arr = [1,2,3] => [6,3,2]
// temp= [ 1,1,2]

// First For Loop
// i=0 | temp[0] = 1; | product = 1;
// i=1 | temp[1] = 1; | product = 2;
// i=2 | temp[2] = 2; | product = 6;

//product = 1; - RESET
//Temp = [1,1,2];

// Second For Loop
// i=2 | temp[2] = 2 ; | product =  3;
// i=1 | temp[1] = 3; | product = 6;
// i=0 | temp[0] = 6; | product = 6;

//temp = [6,3,2];