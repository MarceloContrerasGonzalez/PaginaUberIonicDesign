window.onscroll = function (oEvent) {
    var mydivpos = document.getElementById("div1").offsetTop;
    var scrollPos = document.getElementsByTagName("section")[0].scrollTop;
  
    if(scrollPos >= mydivpos) document.getElementById("noshow").style.display = "none"
    /*else
      document.getElementById("noshow").style.display = "none"*/
  };