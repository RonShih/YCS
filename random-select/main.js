/*
window.onload=function(){
    //this.document.write("Hello JavaScript!");
}
*/
//method2. 
let pictures = [
    "random-select/img/ramen.jpg",
    "random-select/img/rice.jpg",
    "random-select/img/dumplings.jpg"
];

$(document).ready(function(){
    $("input").click(function(){
        //method1. $("a").hide();//hide all images
        //alert("hi"); 彈跳視窗
        //$("H1").text($("li").eq(1).text()); 將?改成食物名稱, eq為其index
        let num = $("#choices li").length;//li有幾個
        //$("H1").text(num);
        let rdm = Math.floor(Math.random()*num);//0<= Math.random() < 1 //Math.floor() -> 無條件捨去後的最大整數
        $("#random-result").text($("#choices li").eq(rdm).text());
        //method1. $("a").eq(rdm).show();       
        //method2. 
        $("#random-pic").attr("src", pictures[rdm]);
    });
});
