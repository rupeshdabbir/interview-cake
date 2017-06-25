/**
 * Created by rdabbir on 6/24/17.
 * https://www.interviewcake.com/question/javascript/merging-ranges
 */

let input = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

function mergeTimes(arr){

    //First sort the array (this is O(nlogN) time
    arr = arr.sort((a,b) => {
        return a.startTime - b.startTime;
    });


    //Logic: The logic here is to take the first time and keep checking if
    //the current's startTime is less than lastMeeting's end time.
    let mergedMeeting = [arr[0]];
    for(let i=1; i<arr.length; i++){

        let currentMeeting = arr[i]; //value of the current meeting
        let lastMeeting = mergedMeeting[mergedMeeting.length - 1]; // This gives us the last merged meeting.


        //Check if current meeting starts before last meeting ends. If yes, merge.
        if(currentMeeting.startTime <= lastMeeting.endTime){
            lastMeeting.endTime = Math.max(currentMeeting.endTime, lastMeeting.endTime);

        } else {
            mergedMeeting.push(currentMeeting);
        }
    }

    return mergedMeeting;

}
