function compareNumbers(a, b) {
    return a - b;
  }
$(document).ready(function () {
    $("#club_courseTable").append(
        "<tr style='background-color:	#66B3FF'>"+
        "<th>X</th><th>星期日</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th><th>星期六</th>"+
        "</tr>"
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
        let today = first_date.getDay();
        let thisDate;
        let week = []
        let count_left = 0, count_right = 0;
        let day_time = ['早上','下午','晚上'];
        //alert([month, day].join('/'));
        
        setMonthAndDay(month, day);
        $('#club_courseTable').empty();//避免之後的submit會使table累加
        $("#club_courseTable").append(
            "<tr style='background-color:  #66B3FF'>"+
            "<th>X</th><th>星期日</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th><th>星期六</th>"+
            "</tr>"
        );  
        for (let x = 0; x < 7; x++) {//用toLocaleDatString()轉換成year/month/day//用.slice(5)只留month/day
            if(x < today){
                count_left++;
                week.push(startDate.getTime() - count_left * oneDayMilliseconds);
            }
            else if(x > today){
                count_right++;
                week.push(startDate.getTime() + count_right * oneDayMilliseconds);
            }
            else{
                week.push(startDate.getTime());
            }
            
        }   
        $('#club_courseTable').append("<tr>")
        week.sort(compareNumbers);
        for (let x = 0; x < 8; x++) {//用toLocaleDatString()轉換成year/month/day//用.slice(5)只留month/day
            if(x != 0){
                thisDate = new Date(week[x-1]);//加豪秒讓時間更改
                console.log(thisDate);
                $('#club_courseTable').append(
                    "<th style='background-color:#97CBFF'>"+thisDate.toLocaleDateString().slice(5)+"</th>"
                );
            }
            else
                $('#club_courseTable').append("<th style='background-color:#97CBFF'>X</th>");
        }
        $('#club_courseTable').append("</tr>")
        
        if(month == 6 && 1 <= day && day <= 27)
        {
            for (let x = 0; x < 3; x++){
                if(x == 0){
                    $('#club_courseTable').append("<tr>" +
                        "<td style='background-color:white'>" + day_time[x] + "</td>" +
                        "<td>假日</td>" + //日
                        "<td></td>" + //一
                        "<td>經典導讀</td>" +//二
                        "<td>無線網路</td>" +//三
                        "<td>影像處理</td>" +//四
                        "<td></td>" + //五
                        "<td>網站實務</td>" + //六
                        "</tr>");
                }
                else if(x == 1){
                    $('#club_courseTable').append("<tr>" +
                        "<td style='background-color:white'>" + day_time[x] + "</td>" +
                        "<td>假日</td>" + //日
                        "<td>多媒體系統</td>" + //一
                        "<td></td>" +//二
                        "<td></td>" +//三
                        "<td></td>" +//四
                        "<td>開會</td>" + //五
                        "<td>網站實務</td>" + //六
                        "</tr>");
                }
                else if(x == 2){
                    $('#club_courseTable').append("<tr>" +
                        "<td>" + day_time[x] + "</td>" +
                        "<td>假日</td>" + //日
                        "<td></td>" + //一
                        "<td></td>" +//二
                        "<td></td>" +//三
                        "<td></td>" +//四
                        "<td></td>" + //五
                        "<td>假日</td>" + //六
                        "</tr>");            
                }          
            }
        }
        else{
            for (let x = 0; x < 3; x++){
                $('#club_courseTable').append("<tr>" +
                    "<td>" + day_time[x] + "</td>" +
                    "<td></td>" + //日
                    "<td></td>" + //一
                    "<td></td>" +//二
                    "<td></td>" +//三
                    "<td></td>" +//四
                    "<td></td>" + //五
                    "<td></td>" + //六
                    "</tr>");
             } 
        }
    });

});


