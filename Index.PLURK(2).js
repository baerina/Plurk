(function() {
    'use strict';

 var filter_switch = false;

    $("#updater").append('<div id="filter" class="item" style=""><a><i class="pif-message-new"></i><span id="noti_np_text">R18 mask</span><span id="filter_message" class="unread_generic">OFF</span></a></div>');
    $("#filter").click(()=>{
        filter_switch = !filter_switch;

        console.log('click')
        console.log(filter_switch)
        if(filter_switch){
            $("#filter_message").text("ON");
           $("._lc_ .plurk.porn .plurk_cnt .td_cnt ").css({"filter":" blur(4px)"});
           $("._lc_ .plurk.porn .plurk_cnt .td_cnt").hover(function () {
               $(this).css({"filter":"none"});
           }, function(){
               $(this).css({"filter":" blur(4px)"});
           })
        }
        else{
            $("#filter_message").text("OFF");
            $("._lc_ .plurk.porn .plurk_cnt .td_cnt ").css({"filter":""});
           $("._lc_ .plurk.porn .plurk_cnt .td_cnt").hover(function () {
               $(this).css({"filter":""});
           }, function(){
               $(this).css({"filter":""});
           })
        }
    })
})();
