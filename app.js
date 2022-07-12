let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});


$(document).ready(function(){
  let selector=$('.all').attr('data-filter');
  $('.portfolio .grid').isotope({
    filter:selector,

  });
  return false;

});
$(document).ready(function(){
let btn=$('.state__list');

  btn.click(function(e){
    $('.state__list button').removeClass("active-port");
    e.target.classList.add("active-port");

    let selector=$(e.target).attr('data-filter');
    $('.portfolio .grid').isotope({
      filter:selector
    });
    return false;
  });
  
});

// header
const header=document.querySelector(".navbar");
const sectionOne=document.querySelector(".header-img");
const sectionOneOptins={
  rootMargin:"-200px 0px 0px 0px"
};

const sectionOneObserver =
 new IntersectionObserver(function(entries,sectionOneObserver){
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      header.classList.add("change-nav");
    }else{
      header.classList.remove("change-nav");
    }
  });
},sectionOneOptins);

sectionOneObserver.observe(sectionOne);


document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
  }
}