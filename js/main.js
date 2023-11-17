$(document).ready(function(){
    var music = false;
    var audio = new Audio("../media/music/music_1.mp3");
    audio.loop = true;
    $(".music_btn").on("click",function(){
        if(!music){
            audio.play();
            music = true;
            $(this).text("OFF");
            $(this).css("color","#ff0000");
            $(this).css("border-color","#ff0000");
        } else {
            audio.pause();
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

    var oldDate = new Date("2023-06-19");
    var newDate = new Date();
    let diff = Math.abs(newDate.getTime() - oldDate.getTime());
    diff = Math.ceil(diff / (1000 * 60 * 60 * 24));

    window.onload = function(){
        if(!localStorage.getItem("visit")){
            localStorage.setItem("visit",true);
            alert("자기의 생일을 너무너무 축하해~");
            alert("이용 방법은 한번만 설명해줄거야 잘 듣길바래 ପ(｡ᵔ ⩊ ᵔ｡)ଓ");
            alert("영상은 클릭하면 소리가 나와! (*ૂ❛ᴗ❛*ૂ)");
            alert("영상 음소거를 누르면 모든 영상을 음소거 시킬 수 있어           (๑╹ワ╹)");
            alert("우측 ON 버튼을 부르면 배경음악이 나와 ՞‪⸝⸝> ̫ <⸝⸝՞");
            alert("모쪼록 즐거운 시간보내 ⚈̤᎑⚈̤");
        } else {
            alert("벌써 " + diff + "일이나 만났어!!");
        }
    }
});