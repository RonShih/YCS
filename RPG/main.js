//mapArray:決定地圖中每個格子的元素
//ctx: HTML5 canvas使用
//currentImgMainX, currentImgMainY:決定主角所在座標
//imgMountain, imgMain, imgEnemy ： 障礙物、主角、敵人的圖片物件
// 725 45
let mapArray, ctx, currentImgMainX, currentImgMainY;
let imgMountain, imgMain, imgEnemy;

//當網頁元件載入完成要做的事情
$(document).ready(function () {
    $("#startButton").hide();
    $("#talkBox").hide();
    //遊戲地圖
    //0:可走、1:障礙、2:終點、3:敵人
    mapArray = [1, 1, 1, 1, 1,
                1, 0, 0, 0, 1,
                1, 0, 0, 3, 1,
                1, 0, 0, 0, 1,
                1, 1, 1, 1, 1];
    ctx = $("#myCanvas")[0].getContext("2d");
    //擺主角
    imgMain = new Image();
    imgMain.src = "RPG/images/spriteSheet.png";
    currentImgMainX = 100;
    currentImgMainY = 200;
    imgMain.onload = function () {
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMainX, currentImgMainY, 100, 100);
    };
    //擺上障礙物與敵人
    imgMountain = new Image();
    imgMountain.src = "RPG/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "RPG/images/Enemy.png";

    imgMountain.onload = function () {
        imgEnemy.onload = function () {
            for (let x in mapArray) {
                if (mapArray[x] == 1) {
                    ctx.drawImage(imgMountain, 96, 192, 32, 32, x % 5 * 100, Math.floor(x / 5) * 100, 100, 100);
                } else if (mapArray[x] == 3) {
                    ctx.drawImage(imgEnemy, 7, 40, 75, 135, x % 5 * 100, Math.floor(x / 5) * 100, 100, 100);
                }
            }
        };
    };
});


let targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
//當有人按下按鍵後要做的事情
$(document).keydown(function (event) {
    
    //主角即將要移動過去的目標位置 主角即將要移動過去的那一格編號 依據主角朝向什麼方向而決定的圖片

    event.preventDefault();
    //避免點擊鍵盤出現瀏覽器的其他行為，例如捲動、放大、換頁...
    //根據使用者按鍵指示，對應計算目標位置、主角新的方向圖片
    
    switch(event.code){
        case "ArrowLeft":
            targetImgMainX = currentImgMainX - 100;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY - 100;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImgMainX = currentImgMainX + 100;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY + 100;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    
    //console.log(targetImgMainX);
    //console.log(targetImgMainY);
    //console.log(cutImagePositionX);
    //在邊界內
    if (targetImgMainX < 500 && targetImgMainX >= 0 && targetImgMainY < 500 && targetImgMainY >= 0) {
        targetBlock = targetImgMainX / 100 + targetImgMainY / 100 * 5;
    } else {//超出邊界
        targetBlock = -1;
    }
    //清除主角原本所在位置
    ctx.clearRect(currentImgMainX, currentImgMainY, 100, 100);
    if (targetBlock == -1 || mapArray[targetBlock] == 1 || mapArray[targetBlock] == 3) {
        //所有異常(出界、遇到敵人、遇到障礙物都不動)
        //console.log(targetBlock);
    } else {//正常情況下設定新的位置
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    //在新的位置上畫上主角
    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMainX, currentImgMainY, 100, 100);
    //對應文字顯示狀態
    /*
    switch (mapArray[targetBlock]) {
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有山");
            break;
        case 2:
            $("#talkBox").text("抵達終點");
            break;
        case 3:
            $("#talkBox").text("有敵人");
            break;
    }*/

});
let state = [7, 122, 200, 275, 350, 418, 485, 555, 625];
let count = 0;
let life = 90;
//ctx.drawImage(imgEnemy, 7, 40, 104, 135, x % 5 * 100, Math.floor(x / 5) * 100, 100, 100);
$(document).keydown(function (event) {
    switch (event.code) {
        case "Space":
            if (mapArray[targetBlock] == 3) {
                if(count < 8 && count >= 0){   
                    count++;
                    ctx.clearRect(targetBlock % 5 * 100, Math.floor(targetBlock / 5) * 100, 100, 100);
                    ctx.drawImage(imgEnemy, state[count], 40, 75, 135, targetBlock % 5 * 100, Math.floor(targetBlock / 5) * 100, 100, 100);
                    if(!$("#game").is(":animated")){
                        $("#game").animate({left:-1}, 20).animate({top:-1}, 20)
                        .animate({left:1}, 20).animate({top:1}, 20)
                        .animate({left:-1}, 20).animate({top:-1}, 20)
                        .animate({left:1}, 20).animate({top:1}, 20)//是Chaining
                        .animate({left:-1}, 20).animate({top:-1}, 20)
                    }                
                }
                else if(count >= 0){
                    //count = 0;
                    ctx.drawImage(imgMountain, 96, 160, 32, 32, targetBlock % 5 * 100, Math.floor(targetBlock / 5) * 100, 100, 100);
                    count = -1;
                    $("#startButton").show();
                    $("#startButton").click(function(){
                        $("#talkBox").show();
                        $("html,body").animate({ scrollTop: document.body.scrollHeight}, 50);
                    });
                }
                life-=10;
                $("#progress_bar").attr("value", life);
            }
            break;
        default:
            return;
    }
});