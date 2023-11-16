$(document).ready(function(){
    var music = false;
    $(".music_btn").on("click",function(){
        if(!music){
            music = true;
        } else {
            music = false;
        }
    });
});