$(document).ready(function() {

var d = new Date();
var t= d.getDate();              
var nm= "'src/calendar-icons/normal/"+t+".png'";
var hv= "'src/calendar-icons/hover/"+t+".png'";
var ac= "'src/calendar-icons/active/"+t+".png'";

$(".cnm").attr("src","src/calendar-icons/normal/"+t+".png");
$(".cac").attr("src","src/calendar-icons/active/"+t+".png");
$(".cac2").attr("src","src/calendar-icons/active/"+t+".png");

$(".chv").attr("src","src/calendar-icons/hover/"+t+".png");

var isDown = false;
$(document).delegate(".ic","mouseover",function(){
if(!isDown){
if(!$("#calendar-menu").is(":visible")){
$(".cnm").hide();
$(".cac").hide();
$(".chv").show();
}
}
});



$(document).delegate(".ic","mouseout",function(){
if(!isDown){
if(!$("#calendar-menu").is(":visible")){
$(".cnm").show();
$(".cac").hide();
$(".chv").hide();

}
}
});

$(document).delegate(".ic","mousedown",function(){
isDown=true;
$(".cnm").hide();
$(".cac").show();
$(".chv").hide();
$(".calendar").css("opacity","1");
});

$(document).delegate(".ic","mouseup",function(){
isDown=false;
if(!isDown){
if(!$("#calendar-menu").is(":visible")){
$(".cnm").hide();
$(".cac").hide();
$(".chv").show();
}
}
});    





$("#university-menu").hide();
                  
$(document).delegate(".university","mousedown",function(){
$(".menus").hide();
$("#university-menu").show();
                     $(".cnm").show();
                     $(".cac").hide();
                     $(".chv").hide();
                     $(".calendar").css("opacity","0.7");
                     
$(".university").css({"background-position":"bottom","background-size":"26px","opacity":"1","margin-right":"10px"});
$("#u-notification").hide();
                     
});

$(".university").mouseover(function(){
                           
$(".university").css({"background-position":"center","background-size":"26px","opacity":"1","margin-right":"0px"}); 
                           
                           
});


$(".university").mouseout(function(){
if(!$("#university-menu").is(":visible")){
$(".university").css({"background-position":"top","background-size":"26px","opacity":"1","margin-right":"0px"}); 
}
});            

$("#calendar-menu").hide();

$(document).delegate(".ic","mousedown",function(){
$(".menus").hide();
                     $("#university-menu").hide();
                     $(".university").css({"background-position":"top","background-size":"26px","opacity":"1","margin-right":"0px"});
                     
                     
$("#calendar-menu").show();

$("#c-notification").hide();  
});

                  
$(document).click(function(e)
                  {                
                 
                  //$(".menus").hide();
                  
                  if(($(e.target).parents(".menus").length<=0)&&(!$(e.target).hasClass("clickable"))){
                  $(".menus").hide();
                  $(".cnm").show();
                  $(".cac").hide();
                  $(".chv").hide();
                  //$(".calendar").css("opacity","0.7");
                  
                  $("#university-menu").hide();
                  $(".university").css({"background-position":"top","background-size":"26px","opacity":"1","margin-right":"0px"});
                  }
                
                  
                  });


$("#profile-menu").hide();
$("#profile-icon").mouseover(function(){
$("#profile-menu").show();
});
$("#profile-menu").mouseover(function(){
$("#profile-menu").show();
});
$("#profile-menu").mouseout(function(){
$("#profile-menu").hide();
});
$("#profile-icon").mouseout(function(){
$("#profile-menu").hide();
});

});