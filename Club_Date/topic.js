//array for storing data
let topicsArray = ["尚未開學",
"國定假日",
"環境準備",
"隨機性",
"國定假日",
"條件判斷"
];
//Date

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1,startDay);//startMonth 0 ~ 11
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
//set initial time
//setMonthAndDay(1,1);
