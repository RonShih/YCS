var player;
var currentPlay = 0;

$("document").ready(function(){
    for(let x = 0; x < playName.length; x++)
        $("#selection").append("<option value=" + x + ">"+playName[x] +"</option>");
    $("#selection").hide();
    $("#pauseButton").hide();
});

function onYouTubeIframeAPIReady(){
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: playList[currentPlay],
        playerVars: {
            "autoplay": 0,
            "controls": 0,
            "showinfo": 0,
            "rel": 0,
            "iv_load_policy": 3
        },
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    $("#playButton").click(function () {
        $("#video_text").text(player.getVideoData().title);
        $("#selection").show();
        $("#pauseButton").show();
        player.playVideo();  
    });
    $("#pauseButton").click(function () {
        $("#video_text").text(player.getVideoData().title);
        player.pauseVideo();  
    });
}

function onPlayerStateChange(event) {
    $("#selection").change(function(){
        currentPlay = $('#selection').find(":selected").val();  
        player.loadVideoById({
            "videoId": playList[currentPlay],
            "suggestedQuality": "large"
        });
    });  
    if (player.getVideoLoadedFraction() > 0) {
        $("#video_text").text(player.getVideoData().title);
    }
}