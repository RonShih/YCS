function compareNumbers(a, b) {
    return a - b;
  }
$(document).ready(function () {
    $("#club_courseTable").append(
        "<tr style='background-color:lightyellow'><th>必(選)修/選修/其他</th><th>課程名稱(分數)</th></tr>"
    );                                                     //一次產生固定標題列
    let topicCount = topicsArray.length;                    //反覆產生資料列
    let oneDayMilliseconds = 24 * 60 * 60 * 1000;           //一天多少毫秒
    $('#input_option').change(function(){
        let value = $('#input_option').find(":selected").val(); //semester
        $('#club_courseTable').empty();//避免之後的submit會使table累加
        $("#club_courseTable").append(
            "<tr style='background-color:lightyellow'><th>必(選)修/選修/其他</th><th>課程名稱(分數)</th></tr>"
        );  
        let selection = ["必修", "選修", "其他"];
        let class_selection = [];
        for(let x = 0; x < topicsArray[value].length; x++){
            let select = 0;
            let trSpecial = "<tr style='background-color:white'>";
            console.log(value);
            for (let y = 0; y < elective.length; y++){
                if(topicsArray[value][x] == elective[y]){
                    trSpecial = "<tr style='background-color:lightgray'>";
                    select = 1;
                }
            }
            for (let y = 0; y < general_class.length; y++){
                if(topicsArray[value][x] == general_class[y]){
                    trSpecial = "<tr style='background-color:gray'>";
                    select = 2;
                }
            }
            class_selection.push(selection[select]);
            $("#club_courseTable").append(
                trSpecial +
                "<td>"+ class_selection[x] +"</td>"+
                "<td>" + topicsArray[value][x] + "(" + topicsScore[value][x] + ")" +"</td>"+
                "</tr>"
            ); //每一列有場次、預計日期、主題                 
        }
    });

});


