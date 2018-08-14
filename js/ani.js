//navigation
document.getElementById('mainHeader').innerHTML = `<div id="navi">
<nav> 
  <div class="nav-wrapper container">
      <a href="index.html" class="svg">
          <img src="./images/white-logo.svg" alt="Riziliant logo" class="logoClass"></img>
      </a>
      
      <ul id="slide-out" class="sidenav">
<li><a href="index.html">Home</a></li>
<li><a href="about.html#aboutLink">About</a></li>
<li class="no-padding">
  <ul class="collapsible collapsible-accordion">
    <li>
      <a class="collapsible-header">Services<i class="material-icons right">arrow_drop_down</i></a>
      <div class="collapsible-body">
        <ul>
          <li><a href="services.html">Mobile App Development</a></li>
          <li><a href="services.html">Website Development</a></li>
          <li><a href="services.html">Website Design</a></li>
          <li><a href="services.html">Website UI/UX</a></li>
          <li><a href="services.html">Digital Marketing</a></li>
        </ul>
          
      </div>
    </li>
    <li><a href="portfolio.html#portfolioLink">Portfolio</a></li>
  <li><a href="contact.html">Contact us</a></li>
  
      <a href="javaScript:void(0)" class="btn-large waves-effect waves-light pink accent-2 col">
                         <span>Request A Quote</span>
       </a>
  </ul>
</li>
</ul>
<!--Desktop-->
<ul class="right hide-on-med-and-down">
<li><a href="index.html">Home</a></li>
<li><a href="about.html#aboutLink">About us</a></li>

<li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Services<i class="material-icons right">arrow_drop_down</i></a>
<ul id='dropdown1' class='dropdown-content'>
             <li><a href="services.html">Mobile App Development</a></li>
          <li><a href="services.html">Website Development</a></li>
          <li><a href="services.html">Website Design</a></li>
          <li><a href="services.html">Website UI/UX</a></li>
          <li><a href="services.html">Digital Marketing</a></li>

</ul>
  </li>
  
    <li><a href="portfolio.html#portfolioLink">Portfolio</a></li>
  <li><a href="contact.html">Contact us</a></li>
 
  <a href="javaScript:void(0)" class="btn-large waves-effect waves-light pink accent-2 col hide-on-med-only hide-on-med-and-up">
                         <span>Request A Quote</span>
       </a>
   
</ul>
<a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  
  </div>

</nav>
</div>
  <div class="container pad-tb2p"> 

      <div class="row">
          <div class="indexP-text">
           <div class="carousel carousel-slider">
                      <div id="sliderContent"></div>
          </div>

        </div>
          
          
      </div>

 </div>`;

//slider
document.getElementById('sliderContent').innerHTML = `
<div class="carousel-item " href="#one!"> <div class="col s12 xl7">  
    <h1 class="banner-h1"> INNOVATIVE MOBILE & WEB SOLUTIONS </h1>
    <h5> TRANSFORM YOUR BUSINESS THROUGH THE POWER OF BEST ENTERPRISE </h5>
     <a href="javaScript:void(0)" class="waves-effect waves-light btn-large btn-white mar-tb25">View Latest Work</a>
</div>
    <div class="col s12 xl5"> 
        <object type="image/svg+xml" data="./images/app-development.svg" alt="App Development"> </object>
    </div> 
  </div>

  <div class="carousel-item " href="#two!"> <div class="col s12 xl6">  
    <h1 class="banner-h1">Mobile app development </h1>
    <h5> We build mobile apps for every user, every platform and every industry </h5>
     <a href="javaScript:void(0)" class="waves-effect waves-light btn-large btn-white mar-tb25">View Latest Work</a>
</div>
    <div class="col s12 xl5"> 
        <object type="image/svg+xml" data="./images/about-banner.svg" alt="App Development"> </object>
    </div> 
  </div>


  <div class="carousel-item " href="#three!"> <div class="col s12 xl5">  
    <h1 class="banner-h1"> Custom Web Development </h1>
    <h5> Interested in our custom website development services? </h5>
     <a href="javaScript:void(0)" class="waves-effect waves-light btn-large btn-white mar-tb25">View Latest Work</a>
</div>
    <div class="col s12 xl7"> 
        <object type="image/svg+xml" data="./images/services-banner.svg" alt="App Development"> </object>
    </div> 
  </div>

  <div class="carousel-item " href="#four!"> <div class="col s12 xl6">  
    <h1 class="banner-h1"> Digital Marketing </h1>
    <h5> TRANSFORM YOUR BUSINESS THROUGH THE POWER OF BEST ENTERPRISE </h5>
     <a href="javaScript:void(0)" class="waves-effect waves-light btn-large btn-white mar-tb25">View Latest Work</a>
</div>
    <div class="col s12 xl5"> 
        <object type="image/svg+xml" data="./images/app-development.svg" alt="App Development"> </object>
    </div> 
  </div>

`;


//footer
document.getElementById('mainFooter').innerHTML = ` <footer class="bg-animation">
<div class="container">
    <div class="row mar-bottom"> 
        <div class="col s12 m12 xl3 l3">  
            <h5> About</h5>
            <p> The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look at a presentation and understand the message. It has come to a point</p>
        </div>
        <div class="col s12 m12 xl3 l3"> 
            <h5> Quick Links </h5>
            <ul> 
                <li> <a href="#"> Home</a> </li>
                <li> <a href="#"> About</a> </li>
                <li> <a href="#"> Services</a> </li>
                <li> <a href="#"> Portfolio</a> </li>
                <li> <a href="#"> Contact Us</a> </li>
                <li> <a href="#"> Blog</a> </li>
            </ul>
         </div>
           <div class="col s12 m12 xl3 l3"> 
            <h5> Quick Links </h5>
            <ul> 
                <li> <a href="#"> Home</a> </li>
                <li> <a href="#"> About</a> </li>
                <li> <a href="#"> Services</a> </li>
                <li> <a href="#"> Portfolio</a> </li>
                <li> <a href="#"> Contact Us</a> </li>
                <li> <a href="#"> Blog</a> </li>
            </ul>
         </div>
         
         <div class="col s12 m12 xl3 l3"> 
            <h5> Quick Links </h5>
            <ul> 
                <li> <a href="#"> Home</a> </li>
                <li> <a href="#"> About</a> </li>
                <li> <a href="#"> Services</a> </li>
                <li> <a href="#"> Portfolio</a> </li>
                <li> <a href="#"> Contact Us</a> </li>
                <li> <a href="#"> Blog</a> </li>
            </ul>
         </div>
       
    </div>
</div>
<div class="copy-r text-c"> 
            <div> Copyright 2018 - @Riziliant Technologies . All Rights Reserved.</div>
</div>
</footer>
`;



M.AutoInit();
$(document).ready(function(){ 
 $(".dropdown-trigger").dropdown();
 $('.sidenav').sidenav();
  $('select').formSelect();
  
  $('.carousel.carousel-slider').carousel({
 fullWidth: true,
 indicators: true,
 
});
autoplay()   
function autoplay() {
 $('.carousel').carousel('next');
 setTimeout(autoplay, 4500);
}

     
     
 
 });
$(window).scroll(function(){
 if ($(window).scrollTop() >100) {
    $('#navi').addClass('navbar-fixed');
    $('nav').addClass('z-depth-3');
   
    
 }
 else {
    $('#navi').removeClass('navbar-fixed'); 
    $('nav').removeClass('z-depth-3');
    
 }
});
