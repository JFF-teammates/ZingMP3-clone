
var jq = $.noConflict()

jq(document).ready(function(){
    jq('.playing_bar .wrap_icon').hover(function (){
        jq(this).children('.icon_title_panel').css('display','block')
    }, function (){
        jq(this).children('.icon_title_panel').css('display','none')
    })
})
