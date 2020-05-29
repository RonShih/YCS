$(document).ready(function () {
  let currentQuiz = null;

  $("#startButton").click(function () {

    if (currentQuiz == null) {

      currentQuiz = 0;

      $("#question").text(questions[0]);

      $("#options").empty();

      for (let x = 0; x < fiveIndex.length; x++) {
        $("#options").append(
          "<input name='options' type='radio' value=" + x +
          "<label>" + fiveIndex[x] + "</label><br><br>"
        );
      }

      $("#startButton").attr("value", "Next");
    } else {
      $.each(
        $(":radio"), function (i, val) {
          if (val.checked) {

            if (currentQuiz == 29) {
              answers[currentQuiz] = Number(i + 1)

              $("#question").empty();
              $("#options").empty();
              $("#options").append("作答完成" + "<br><br>")
              $("#options").append(allScores[0].Char + ": ");
              $("#options").append(answers[4] + answers[9] + answers[13] + answers[17] + answers[23] + answers[29] + "<br><br>");
              $("#options").append(allScores[1].Char + ": ");
              $("#options").append(answers[2] + answers[5] + answers[12] + answers[19] + answers[21] + answers[28] + "<br><br>");
              $("#options").append(allScores[2].Char + ": ");
              $("#options").append(answers[1] + answers[7] + answers[14] + answers[16] + answers[24] + answers[27] + "<br><br>");
              $("#options").append(allScores[3].Char + ": ");
              $("#options").append(answers[0] + answers[6] + answers[10] + answers[15] + answers[20] + answers[25] + "<br><br>");
              $("#options").append(allScores[4].Char + ": ");
              $("#options").append(answers[3] + answers[8] + answers[11] + answers[18] + answers[22] + answers[26] + "<br><br>");

              currentQuiz = null;

              $("#startButton").attr("value", "Restart");
            } else {
              answers[currentQuiz] = Number(i + 1);
              currentQuiz++;

              $("#question").text(questions[currentQuiz]);
              $("#options").empty();

              for (let x = 0; x < fiveIndex.length; x++) {
                $("#options").append(
                  "<input name ='options' type='radio' value=" + x +
                  "<label>" + fiveIndex[x] + "</label><br><br>"
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