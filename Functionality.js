function OpenMenu(){
    
}


window.onscroll = function(e) {scrollFunction(e)};

function scrollFunction(e) {    
    let element = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        element.style.position = "fixed";
        element.style.background="#474d52";
          element.style.top = "0";
          element.style.zIndex = 1;

    }else{
        element.style.background="none";
    }
}
