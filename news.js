
function originalCSS(){

    $(".navBarLogoText").css("margin-left", "90%")
    $(".navBarLogoText").css("margin-top", "20px")
    $(".navBarOtherlinks").css("margin-top", "15px")
    $(".navBarOtherlinks").css("margin-right", "10px")
    $(".navBarContact").css("margin-right", "90px")
    $(".navBarContact").css("margin-top", "15px")

    $(".newsBox").css("width", "800px")
    $(".newsBoxPic").css("width", "80%")
    $(".newsBoxTitle").css("font-size", "30px")
    $(".newsBoxTitle").css("padding-top", "0")
    $(".newsBoxArticle").show()
  
  
  }
  
  function changeCSS(){
  
    $(".navBarLogoText").css("margin-left", "0%")
    $(".navBarLogoText").css("margin-top", "0px")
    $(".navBarOtherlinks").css("margin-right", "0px")
    $(".navBarOtherlinks").css("margin-top", "0px")
    $(".navBarContact").css("margin-right", "0px")
    $(".navBarContact").css("margin-top", "0px")


    $(".newsBox").css("width", "350px")
    $(".newsBoxPic").css("width", "150%")
    $(".newsBoxTitle").css("font-size", "20px")
    $(".newsBoxTitle").css("padding-top", "100%")
    $(".newsBoxArticle").hide()
  
  
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
  