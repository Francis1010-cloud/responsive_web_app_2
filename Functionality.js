
window.onscroll = function(e) {scrollFunction(e)};


function OpenMenu(){
    let navbar = document.getElementsByClassName("navigation-menu");
    navbar[0].style.display = "Block";
    navbar[0].style.zIndex = 1;
    navbar[0].style.width = '100%';
    navbar[0].style.color = "Black";
    navbar[0].style.borderRadius = '7px';
    navbar[0].style.background = "white";
    navbar[0].style.padding = "1.2rem";
    let list = navbar[0].getElementsByTagName("li");
    for(let i=0;i<list.length;i++){
        list[i].style.marginBlock ="1rem";
    }

    modelclick();
}



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
    

    let abt = document.querySelector(".about-container");
    let navElement= document.getElementById("ABOUT");
    const rect1 = abt.getBoundingClientRect();

    if (rect1.top == 68) {

                let allLinks = document.querySelectorAll('.menu-bar a');
                allLinks.forEach(link => link.classList.remove('selected'));
                navElement.classList.add('selected');
    }

    let service = document.querySelector(".service-container");
    let navElements = document.getElementById("SERVICES");
    const rect2 = service.getBoundingClientRect();

    if (rect2.top >124 && rect2.top < 130) {
        let allLinks = document.querySelectorAll('.menu-bar a');
        allLinks.forEach(link => link.classList.remove('selected'));
        navElements.classList.add('selected');
    }


}

function isElementInView(element) {
    // Get the element's bounding rectangle
    const rect = element?.getBoundingClientRect();
    
    // Check if the element is within the viewport
    return rect?.top >= 0 && rect?.bottom <= window.innerHeight;
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

        case "books":
            item = ".book-item";
            break;

        
        default:
        console.log("default");
        break;

    }


        let elements = document.getElementsByClassName("product-card-container");  
        let productCards = elements[0].getElementsByClassName("product-card");
       
        // Loop through each product card
for (let i = 0; i < productCards.length; i++) {
    let classNames = productCards[i].classList;
    let itemElement = document.getElementsByClassName(classNames[1]);
    if(key == "all"){
       
            displayFunctionality("block",itemElement);

    }else{
        if(item.split(".")[1] != classNames[1]){
                displayFunctionality("none",itemElement);
        }else{
            displayFunctionality("block",itemElement);
        }
    }

    }     
}

function displayFunctionality(displayProp,itemElement){
    for(let i = 0; i < itemElement.length; i++){
        itemElement[i].style.display = displayProp;
    }
}


function closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


setTimeout(() => {
    var modal = document.getElementById("myModal");
 modelclick = () =>{
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = () => {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick =(event)=> {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}, 2000);

