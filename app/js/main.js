var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
      snapOnRelease: false,
    },
  });

  //modal
  $("#burger").on("click", function () {
    document.getElementById("burger").style.display = "none";
    document.getElementById("xclose").style.display = "block";
    document.getElementById("modal").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
});

$("#xclose").on("click", function () {
    document.getElementById("burger").style.display = "block";
    document.getElementById("xclose").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
});

//popup
$(document).on('click', '.addp', function (){
  $('#popup').css({
  display: 'block'
  })
  $('body').css({
  overflow: 'hidden'
  })
  })
$("#back").on("click", function () {
  document.getElementById("popup").style.display = "none";
  document.getElementById("body").style.overflow = "visible";
});

// 35/25см
$(document).on('click', '.big', function (){
  $(this).addClass("actual");
  $(this).next().removeClass("actual");
})
$(document).on('click', '.small', function (){
  $(this).addClass("actual");
  $(this).prev().removeClass("actual");
})
$("#back").on("click", function () {
  document.getElementById("popup").style.display = "none";
  document.getElementById("body").style.overflow = "visible";
});


//наведение на карточку товара в мобилке
$( document ).ready(function() {
  if ($(window).width() <= 1149){
    $(".catalog-item").removeClass("hover-item");
  }
  
  if ($(window).width() >= 1149){
    $(".catalog-item").addClass("hover-item");
  }
});

$( window ).resize(function() {
  if ($(window).width() <= 1149){
    $(".catalog-item").removeClass("hover-item");
  }
  
  if ($(window).width() >= 1149){
    $(".catalog-item").addClass("hover-item");
  }
});

//выделение категории в мобилке
$(document).on('click', '.swiper-slide', function (){
  $(".swiper-slide").removeClass("hover-category");
  $(this).addClass("hover-category");
})


