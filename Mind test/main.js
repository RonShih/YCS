$(document).ready(function(){
    $('#myProgress').hide();
    let currentQuiz=null;//目前作答到第幾題
    let grades = 0;
    $('#startButton').click(function(){//按下按鈕後觸發事件
        $('#myProgress').hide();
        if(currentQuiz ==null){
            currentQuiz = 0;//設定目前作答到第0題
            $('#question').text(currentQuiz+1 + ". " + questions[0].question);//顯示題目
            $('#options').empty();//清空選項區域
            for(let x = 0; x<questions[0].answers.length;x++){
                $('#options').append(
                    "<input name ='options' type='radio' value="+
                    x+">"+
                    "<label>"+questions[0].answers[x][0]+
                    "</label><br><br>"
                );
            }
            $("#startButton").attr("value","Next");//修改按鈕的顯示字
        }else{//如果已經作答就從這裡繼續
            //尋訪每個選項是否有被選取
            $.each(
                $(":radio"),function(i,val){ //$.each($(":radio"), function(i,val){...});for all radio button
                    if(val.checked){
                        if(currentQuiz == 4){//finish 
                            if(questions[currentQuiz].answers[i][1] == 1)
                                grades += questions[currentQuiz].answers[i][1];
                            console.log(currentQuiz, grades);
                            grades = grades * 20;
                            if(grades >= 60)
                                $("#question").text("Congradulation! you pass the test (" +grades+"%)");
                            else
                                $("#question").text("Sorry! you failed! Here's the GUIDE!");
                            $('#options').empty();//清空選項區域
                            $('#myProgress').show();
                            move(grades);
                            grades = 0;
                            currentQuiz = null;
                            $("#startButton").attr("value","Restart");
                        }else{//還在作答
                            if(questions[currentQuiz].answers[i][1] == 1)
                                grades += questions[currentQuiz].answers[i][1];
                            console.log(currentQuiz, grades);
                            currentQuiz++;
                            $('#question').text(currentQuiz+1 + ". " + questions[currentQuiz].question);//顯示題目
                            $('#options').empty();//清空選項區域
                            for(let x = 0; x<questions[currentQuiz].answers.length;x++){
                                $('#options').append(
                                    "<input name ='options' type='radio' value="+
                                    x+">"+
                                    "<label>"+questions[currentQuiz].answers[x][0]+
                                    "</label><br><br>"
                                );
                            }
                            
                        }
                        return false;
                    }
                }
            );
        }
    });
});

function move(grades) {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    if(grades<60)
        elem.style.backgroundColor = 'red';
    else
        elem.style.backgroundColor = '#4CAF50';
    function frame() {
      if (width >= grades) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }