window.onload = function () {
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

  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  $(document).ready(function () {
    //   // 안내창 기능
    //   // 추가 기능 : 스크롤 바 없애기
    $("html").css("overflow", "hidden");
    // 추가 기능 : 공백부분 눌렀을때 닫기
    let modalWrap = $(".modal-wrap");
    let modalClose = $(".modal-close");
    modalClose.click(function () {
      modalWrap.stop().fadeOut(300);
      $("html").css("overflow", "auto");
    });

    let modalMain = $(".modal-main");
    // 내용 배경 클릭
    modalMain.click(function (event) {
      //클릭 정보 전달 막기
      event.stopPropagation();
    });
    // 전체 배경 클릭
    modalWrap.click(function () {
      modalWrap.stop().fadeOut(300);
      //추가기능 : 스크롤바 살리기
      $("html").css("overflow", "auto");
    });
    AOS.init({
      duration: 1000,
    });
  });

  // 모바일 메뉴 클릭시 오픈,------------------------------------------------

  //----------------------------------------------------------------------
  // help 메뉴
  new Waypoint({
    element: $(".fix-menu"),
    handler: function (direction) {
      if (direction == "down") {
        $(".fix-menu").addClass("fix-menu-show");
      } else if (direction == "up") {
        $(".fix-menu").removeClass("fix-menu-show");
      }
    },
    offset: "0%",
  });
  // -----------------------------------------------------------------------
  // 위로올리기
  $(document).ready(function () {
    //위로가기 기능
    let go_top = $(".gotop");
    go_top.click(function () {
      $("html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
    new Waypoint({
      element: $(".gotop"),
      handler: function (direction) {
        if (direction == "down") {
          $(".gotop").addClass("gotop-show");
        } else if (direction == "up") {
          $(".gotop").removeClass("gotop-show");
        }
      },
      offset: "0%",
    });
  });
  // -----------------------------------------------------------------------
  // $(window).resize(function () {
  //   let width = $(window).width();
  //   let responce = $(".visual-container > video");
  //   if (width < 766) {
  //     alert("?");
  //     responce.attr("src", "image/jb_jejulager_mo_4.mp4");
  //   } else {
  //     responce.attr("src", "image/jb_jejulager_web_6.mp4");
  //   }
  // });
  // -----------------------------------------------------------------------
};
