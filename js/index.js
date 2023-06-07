$(document).ready(function(){

    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".top_move").animate({top : "-850px"},500,function(){
            $(".top_move").append($(".top_move li").eq(0))
            $(".top_move").css({top : 0})
        })/* animate */
    },3000)/* setInterval */

    $(".pop_click").click(function(){
        $(".pop_bg, .popup").show()
    })/* pop click */
    
    $(".close").click(function(){
        $(".pop_bg, .popup").hide()
    })/* pop click */

    
})/* jQuery Close */