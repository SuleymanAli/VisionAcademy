/* Youtube Player API */

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      showinfo: 0,
      contorls: 0
    },
    videoId: 'VYCOg-yglNM',
    events: {
      'onReady': onPlayerReady,
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}

/* Slick Js */

$(document).ready(function () {
  $('.galery-images').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
          });

  $('.news-box-images').slick({
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
      }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
      });

  $('.events-gallery-images').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    arrows: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
      }
    },
    {
      breakpoint: 480,
      settings: {
      }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
      });
  $('.our-team-boxes').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    autoplay: false,
    arrows: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
      });
});

/* Menu Icon Toggle */

$("#icon").on("click",function(){
  $(".section").slideToggle(".header .section .d-flex");
})

/* Animate CSS */

if (window.matchMedia('(max-width: 768px)').matches)
{
  $('.balls').addClass('animated slideInLeft slow');
}

$('.projects-item:nth-child(odd)').attr('data-aos', 'fade-left');

$('.projects-item:nth-child(even)').attr('data-aos', 'fade-right');

/* AOS */

AOS.init();

/* Show/Less More For Gallery */

$(document).ready(function () {
  size_li = $("#grid>div").length;
  x=12;
  $('#grid>div:lt('+x+')').show();
  $('#loadMore').click(function () {
    x= (x+8 <= size_li) ? x+8 : size_li;
    $('#grid>div:lt('+x+')').show("slow");
  });
  $('#showLess').click(function () {
    x=(x-8<0) ? 12 : x-8;
    $('#grid>div').not(':lt('+x+')').hide("slow");
  });
});

/* Study Abroad Feedback */

$(document).ready(function () {
  $('#feedback-toggle').click(function () {
    $('.feedback').toggleClass('feedback-active');
  })

  if (window.matchMedia('(max-width: 600px)').matches)
  {
    $('#feedback-toggle').click(function () {
      $(this).toggleClass('feedback-toggle-active');
      console.log('2');
    })
  }
});


/* Dropdown */

$(document).ready(function () {
  $('.menu__item').hover(function() {
    $(this).children('ul').stop(true, false, true).slideToggle('slow');
  });
});
