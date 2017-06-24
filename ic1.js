/**
 * Created by rdabbir on 6/23/17.
 * Problem: https://www.interviewcake.com/question/javascript/stock-price
 *
 * Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

 For example:

 var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

 getMaxProfit(stockPricesYesterday);
 // returns 6 (buying for $5 and selling for $11)

 No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
 */

function getMaxProfit(arr) {
    let minProfit=arr[0], maxProfit=0;


    for(let i=0; i< arr.length; i++) {

        //Checking for min profit.
        if(arr[i] < minProfit) {
            minProfit= arr[i];
            maxProfit = 0;
            continue; //We need to sell after we buy, we go to the next.
        }

        //You would need to find the max profit and you need to buy first.
        //i.e we try to sell after we buy.

        if(arr[i] > maxProfit) {
            maxProfit = arr[i];
        }

    };

    return maxProfit - minProfit;
}
let input = [10, 7, 5, 8, 11, 9];
getMaxProfit(input);