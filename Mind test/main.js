$(document).ready(function(){
    let currentQuiz=null;//目前作答到第幾題
    $('#startButton').click(function(){//按下按鈕後觸發事件
        if(currentQuiz ==null){
            currentQuiz = 0;//設定目前作答到第0題
            $('#question').text(questions[0].question);//顯示題目
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
                        if(isNaN(questions[currentQuiz].answers[i][1])){//分成是否已產生結果(A~D)    
                            let finalResult = questions[currentQuiz].answers[i][1];//最終成果
                            $("#question").text(finalAnswers[finalResult][0]);
                            $("#options").empty();
                            $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                            currentQuiz=null;
                            $("#startButton").attr("value","Restart");
                        }else{//還在作答
                            currentQuiz = questions[currentQuiz].answers[i][1]-1;
                            $('#question').text(questions[currentQuiz].question);//顯示題目
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
                        return false
                    }
                }
            );
        }
    });
});