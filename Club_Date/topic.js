//array for storing data
let topicsArray = [["程式設計一", "資訊概論", "微積分一", "物理一", "C++實習", "web程式設計", "進階英語一", "國文一"],
["程式設計二", "離散數學", "微積分二", "電子電路學", "物理二", "C++實習二", "進階英語二", "國文二"],
["資料通訊概論", "線性代數", "數位系統實驗", "資料結構", "實用科技英文", "繪本賞析", "人物與中國歷史"],
["計算機組織", "作業系統概論", "機率與統計", "演算法", "數位系統實驗二", "生死學概論", "實用英文寫作"],
["超大型積體電路設計導論", "資訊講座", "計算機網路概論", "視窗程式設計", "生物學概論", "老人學導論", "病媒與生活"],
["多媒體系統概論", "無線網路概論", "影像處理概論", "網站實務設計", "論語道德經"]];
//Date
let general_class = ["國文一","國文二","進階英語一","進階英語二","繪本賞析","人物與中國歷史","實用科技英文","實用英文寫作","生死學概論","論語道德經","老人學導論","病媒與生活"]
let elective = ["web程式設計","視窗程式設計","生物學概論","網站實務設計"]
let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1,startDay);//startMonth 0 ~ 11
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
//set initial time
//setMonthAndDay(1,1);
