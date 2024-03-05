$(document).ready(function () {
  // MOBILE-NAVIGATION-LIST

  $(".navigation-list").clone().appendTo(".mobile-menu-body");

  $(".hamburger").on("click", function () {
    if (!$(".mobile-menu").hasClass("mobile-view")) {
      $(".mobile-menu").addClass("mobile-view");
    } else {
      $(".mobile-menu").removeClass("mobile-view");
    }
  });

  $("#menu-close").on("click", function () {
    $(".mobile-menu").removeClass("mobile-view");
    $(".dropdown-li").removeClass("open");
    $(".dropdown-li").find(">.dropdown-list").hide(200);
  });

  $(".mobile-menu .dropdown-li>a").append('<i class="fa fa-angle-right"></i>');

  $(".mobile-menu .dropdown-li>a").click(function () {
    const parent = $(this).parent(".dropdown-li");
    if (!parent.hasClass("open")) {
      const ulParent = parent.parent();
      ulParent.find(".dropdown-li.open").find(">.dropdown-list").hide(200);
      ulParent.find(".dropdown-li.open").removeClass("open");
      parent.addClass("open");
      parent.find(">.dropdown-list").show(200);
    } else {
      parent.removeClass("open");
      parent.find(">.dropdown-list").hide(200);
    }
  });

  // SCROLL JS

  // $('.scroller').mCustomScrollbar();

  // WOW JS

  new WOW().init();

  // REVIEW SLIDER JS

  $(".main-slider").slick({
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
  $(".our-journal-slider").slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".testimonail-main-slider").slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".resources-main-slider").slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
