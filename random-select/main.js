/*
window.onload=function(){
    //this.document.write("Hello JavaScript!");
}
*/
//method2. 
let pictures = [
    "img/OCSSD_abstract.png",
    "img/bottleneck_abstract.png",
    "img/CAFTL_abstract.png"
];
let paper = [
    'https://www.usenix.org/system/files/conference/fast17/fast17-bjorling.pdf',
    'https://static.usenix.org/event/fast08/tech/full_papers/zhu/zhu.pdf',
    'https://static.usenix.org/events/fast11/tech/full_papers/Chen.pdf',

]

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


$(document).ready(function(){
    $.each($(":radio"),function(i,val){ //$.each($(":radio"), function(i,val){...});for all radio button
        $("input").click(function(){
            if(val.checked){
                $("#paper_abstract").attr("src", pictures[i]);
                $("#link").click(function(){
                    $("#link").attr("href", paper[i]);
                });
            }
        });
    });
});