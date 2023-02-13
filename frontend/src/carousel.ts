let slideIndex = 0;
showSlides();

function showSlides() {
  let i:number;
  let slides = document.getElementsByClassName("banner__item");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < 3; i++) {
    // slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > 3) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  // slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activedot";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
