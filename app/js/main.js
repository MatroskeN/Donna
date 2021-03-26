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