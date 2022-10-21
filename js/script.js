window.onload = function(){
  var swiper = new Swiper(".logomenuswiper", {
    slidesPerView: 6,
    spaceBetween: 15,
    freeMode: false,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: "500",
      disableOnInteraction: false,
    },
    centeredSlides: true,
    loop: true,
    speed: 20000,
  });
}