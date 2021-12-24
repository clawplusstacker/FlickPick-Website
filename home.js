
function originalCSS(){

  $(".navBarLogoText").css("margin-left", "90%")
  $(".navBarLogoText").css("margin-top", "20px")
  $(".navBarOtherlinks").css("margin-top", "15px")
  $(".navBarOtherlinks").css("margin-right", "10px")
  $(".navBarContact").css("margin-right", "90px")
  $(".navBarContact").css("margin-top", "15px")

  $("#bannerLeft").css("float", "left")
  $("#bannerLeft").css("width", "50%")
  $("#bannerLeftText").css("margin-left", "30%")
  $("#bannerLeftText").css("font-size", "70px")
  $("#bannerRight").show();

  $(".ssPic").css("width", "300px")
  $(".ssDesc").css("font-size", "15px")
  $("#pickMovie").css("margin-top", "80px")

  $(".homeBody2Header").css("padding-top", "130px")
  $(".homeBody2Header").css("margin-left", "100px")
  $(".homeBody2Header").css("text-align", "inherit")
  $("#demoDesc").show()
  $("iframe").css("height", "490px")
  $("iframe").css("width", "820px")
  $("iframe").css("bottom", "63%")
  $("iframe").css("left", "40%")
  $("iframe").css("margin-top", "0px")
  $("iframe").removeClass("iframeResize")


  $(".homeBody3").css("height", "650px")
  $(".halfLeft").css("float", "left")
  $(".halfLeft").css("width", "50%")
  $(".halfLeft").css("height", "80%")
  $(".halfRight").css("float", "right")
  $(".halfRight").css("width", "50%")
  $(".halfRight").css("height", "80%")
  $("#teamPic").css("margin-top", "80px")


}

function changeCSS(){

  $(".navBarLogoText").css("margin-left", "0%")
  $(".navBarLogoText").css("margin-top", "0px")
  $(".navBarOtherlinks").css("margin-right", "0px")
  $(".navBarOtherlinks").css("margin-top", "0px")
  $(".navBarContact").css("margin-right", "0px")
  $(".navBarContact").css("margin-top", "0px")


  $("#bannerLeft").css("float", "none")
  $("#bannerLeft").css("width", "100%")
  $("#bannerLeftText").css("margin-left", "0%")
  $("#bannerLeftText").css("font-size", "50px")
  $("#bannerRight").hide();

  $(".ssPic").css("width", "130px")
  $(".ssDesc").css("font-size", "10px")
  $("#pickMovie").css("margin-top", "0px")


  $(".homeBody2Header").css("padding-top", "30px")
  $(".homeBody2Header").css("margin-left", "0px")
  $(".homeBody2Header").css("text-align", "center")
  $("#demoDesc").hide()
  $("iframe").css("height", "200px")
  $("iframe").css("width", "300px")
  $("iframe").css("bottom", "0%")
  $("iframe").css("left", "0%")
  $("iframe").css("margin-top", "20%")
  $("iframe").addClass("iframeResize")
  



  $(".homeBody3").css("height", "1700px")
  $(".halfLeft").css("float", "none")
  $(".halfLeft").css("width", "100%")
  $(".halfLeft").css("height", "35%")
  $(".halfRight").css("float", "none")
  $(".halfRight").css("width", "100%")
  $(".halfRight").css("height", "0%")
  $("#teamPic").css("margin-top", "0px")


}

$(function() {

  var win = $(this);
  var width = 1100

  //When resizing 
  $(window).on('resize', function(){

    if (win.width() > width) {
      originalCSS()
    }else{

      changeCSS()
    }

  })

  //On load 
   $(document).ready(function() {

      if (win.width() > width) {
        originalCSS()
      }else{
        changeCSS()
      }
  })
})
