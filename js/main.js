$(document).ready(function(){
    var music = false;
    $(".music_btn").on("click",function(){
        if(!music){
            music = true;
            $(this).text("OFF");
            $(this).css("color","#ff0000");
            $(this).css("border-color","#ff0000");
        } else {
            music = false;
            $(this).text("ON");
            $(this).css("color","#1216c7");
            $(this).css("border-color","#1216c7");
        }
    });

    $("video").on("click",function(){
        var on_btn = $(this).siblings(".volume_on");
        var off_btn = $(this).siblings(".volume_off");
        if(this.muted){
            this.muted = false;
            on_btn.show();
            on_btn.fadeOut(1000);
        } else {
            this.muted = true;
            off_btn.show();
            off_btn.fadeOut(1000);
        }
    });
    $(".mute_all_btn").on("click",function(){
        var all_off_btn = $(".fixed_box .volume_off");
        var video = [];
        video.push($("video"));
        $.each(video[0],function(index,item){
            item.muted = true;
        });
        all_off_btn.show();
        all_off_btn.fadeOut(1000);
    });
});