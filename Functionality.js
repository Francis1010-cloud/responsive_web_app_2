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
          element.style.width = "-webkit-fill-available";

    }else{
        element.style.background="none";
    }
}

function sectionNavigate(clickedLink) {;
    // Remove 'selected' class from all links
    let allLinks = document.querySelectorAll('.menu-bar a');
    allLinks.forEach(link => link.classList.remove('selected'));

    // Add 'selected' class to the clicked link
    clickedLink.classList.add('selected');
}

function tabSelect(clickedLink,event,key){
        event.preventDefault();
      // Remove 'selected' class from all links
      let allLinks = document.querySelectorAll('.product-tab a');
      allLinks.forEach(link => link.classList.remove('selected'));
  
      // Add 'selected' class to the clicked link
      clickedLink.classList.add('selected');

      console.log("key",key)
      let item = "";


      switch(key){
        case "product":
            item = ".product-item";
            break;
        case "app":
            item = ".app-item";
            break;
        case "branding":
            item = ".brand-item";
            break;
        
        default:
        console.log("default");
        break;

    }


        let elements = document.getElementsByClassName("product-card-container");  
        console.log(elements[0].getElementsByClassName("product-card")) 

        let productCards = elements[0].getElementsByClassName("product-card");
       
        // Loop through each product card
for (let i = 0; i < productCards.length; i++) {
    let classNames = productCards[i].classList;
    console.log(classNames[1]); 
}

      
      
  }