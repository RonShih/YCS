$(document).ready(function () {
    $("#club_courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>日期</th></tr>"
    );                                                      //一次產生固定標題列
    let topicCount = topicsArray.length;                    //反覆產生資料列
    let oneDayMilliseconds = 24 * 60 * 60 * 1000;           //一天多少毫秒
    /*-----speaker's input version-----
    $('#input_date').change(function(){
        let inputDate = $(this).val();
        console.log(inputDate);//yyyy-mm-dd
        let splitText = inputDate.split("-");
        console.log(splitText);//(3) ["yyyy", "mm", "dd"]
        setMonthAndDay(splitText[1], splitText[2]);
    });*/

    $('#submit').on('click', function () {                    //button submit version
        let first_date = new Date($('#club_input_date').val())
        //console.log(first_date);
        let day = first_date.getDate();
        let month = first_date.getMonth() + 1;

        //alert([month, day].join('/'));
        $('#club_courseTable').empty();//避免之後的submit會使table累加
        setMonthAndDay(month, day);
        for (let x = 0; x < topicCount; x++) {//用toLocaleDatString()轉換成year/month/day//用.slice(5)只留month/day
            let thisDate = new Date(startDate.getTime() + 7 * x * oneDayMilliseconds);//加豪秒讓時間更改
            //將特定row改成灰色
            let trSpecial = "<tr>";
            if (topicsArray[x] == "國定假日" || topicsArray[x] == "尚未開學")
                trSpecial = "<tr style='color:gray'>";
            $('#club_courseTable').append(
                trSpecial +
                "<td>" + (x + 1) + ". " + "</td>" +
                "<td>" + thisDate.toLocaleDateString().slice(5) + "</td>" +
                "<td>" + topicsArray[x] + "</td>" +
                "<tr>"
            );//每一列有場次、預計日期、主題        
        }
    });

});

