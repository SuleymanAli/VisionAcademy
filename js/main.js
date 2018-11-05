// /* Youtube Player API */

// // This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '100%',
//     width: '100%',
//     playerVars: {
//       autoplay: 1,
//       showinfo: 0,
//       contorls: 0
//     },
//     videoId: 'VYCOg-yglNM',
//     events: {
//       'onReady': onPlayerReady,
//     }
//   });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;

// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }

// function stopVideo() {
//   player.stopVideo();
// }

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

/* Typed Js For Study Abroad Home Page */

var typed = new Typed("#text h2", {
  strings: [
  "Universitetinizi <br>Tapın", 
  "Find <br>Your <br>University"
  ],
  typeSpeed: 60,
      // fadeOut: true,
      // loop: true,
    });

var littkeTyped = new Typed("#text p", {
  strings: [
  "Be Strong", 
  "Be Clever"
  ],
  typeSpeed: 60,
  startDelay: 6000,
      // fadeOut: true,
      loop: true,
    });

/* Scroll Animation For Study Abroad Home Page */

var $window = $(window);
var $elem = $(".wrapper")

function isScrolledIntoView($elem, $window) {
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(document).on("scroll", function () {
  if (isScrolledIntoView($elem, $window)) {
    $elem.find('.overlay').addClass("study-gallery-animate");
    $elem.find('img').addClass("study-gallery-img-animate");
  }
});

/* Calendar */

  // Setup the calendar with the current date
  $(document).ready(function(){
    var date = new Date();
    var today = date.getDate();
      // Set click handlers for DOM elements
      $(".right-button").click({date: date}, next_year);
      $(".left-button").click({date: date}, prev_year);
      $(".month").click({date: date}, month_click);
      $("#add-button").click({date: date}, new_event);
      // Set current month as active
      $(".months-row").children().eq(date.getMonth()).addClass("active-month");
      init_calendar(date);
      var events = check_events(today, date.getMonth()+1, date.getFullYear());
      show_events(events, months[date.getMonth()], today);
    });

  // Initialize the calendar by appending the HTML dates
  function init_calendar(date) {
    $(".tbody").empty();
    $(".events-container").empty();
    var calendar_days = $(".tbody");
    var month = date.getMonth();
    var year = date.getFullYear();
    var day_count = days_in_month(month, year);
    var row = $("<tr class='table-row'></tr>");
    var today = date.getDate();
      // Set date to 1 to find the first day of the month
      date.setDate(1);
      var first_day = date.getDay();
      // 35+firstDay is the number of date elements to be added to the dates table
      // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
      for(var i=0; i<35+first_day; i++) {
          // Since some of the elements will be blank, 
          // need to calculate actual date from index
          var day = i-first_day+1;
          // If it is a sunday, make a new row
          if(i%7===0) {
            calendar_days.append(row);
            row = $("<tr class='table-row'></tr>");
          }
          // if current index isn't a day in this month, make it blank
          if(i < first_day || day > day_count) {
            var curr_date = $("<td class='table-date nil'>"+"</td>");
            row.append(curr_date);
          }   
          else {
            var curr_date = $("<td class='table-date'>"+day+"</td>");
            var events = check_events(day, month+1, year);
            if(today===day && $(".active-date").length===0) {
              curr_date.addClass("active-date");
              show_events(events, months[month], day);
            }
              // If this date has any events, style it with .event-date
              if(events.length!==0) {
                curr_date.addClass("event-date");
              }
              // Set onClick handler for clicking a date
              curr_date.click({events: events, month: months[month], day:day}, date_click);
              row.append(curr_date);
            }
          }
      // Append the last row and set the current year
      calendar_days.append(row);
      $(".year").text(year);
    }

  // Get the number of days in a given month/year
  function days_in_month(month, year) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);    
  }

  // Event handler for when a date is clicked
  function date_click(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");
    show_events(event.data.events, event.data.month, event.data.day);
  }

  // Event handler for when a month is clicked
  function month_click(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    var date = event.data.date;
    $(".active-month").removeClass("active-month");
    $(this).addClass("active-month");
    var new_month = $(".month").index(this);
    date.setMonth(new_month);
    init_calendar(date);
  }

  // Event handler for when the year right-button is clicked
  function next_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()+1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
  }

  // Event handler for when the year left-button is clicked
  function prev_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()-1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
  }

  // Event handler for clicking the new event button
  function new_event(event) {
      // if a date isn't selected then do nothing
      if($(".active-date").length===0)
        return;
      // remove red error input on click
      $("input").click(function(){
        $(this).removeClass("error-input");
      });
      // empty inputs and hide events
      $("#dialog input[type=text]").val('');
      $("#dialog input[type=number]").val('');
      $(".events-container").hide(250);
      $("#dialog").show(250);
      // Event handler for cancel button
      $("#cancel-button").click(function() {
        $("#name").removeClass("error-input");
        $("#count").removeClass("error-input");
        $("#dialog").hide(250);
        $(".events-container").show(250);
      });
      // Event handler for ok button
      $("#ok-button").unbind().click({date: event.data.date}, function() {
        var date = event.data.date;
        var name = $("#name").val().trim();
        var count = parseInt($("#count").val().trim());
        var day = parseInt($(".active-date").html());
          // Basic form validation
          if(name.length === 0) {
            $("#name").addClass("error-input");
          }
          else if(isNaN(count)) {
            $("#count").addClass("error-input");
          }
          else {
            $("#dialog").hide(250);
            console.log("new event");
            new_event_json(name, count, date, day);
            date.setDate(day);
            init_calendar(date);
          }
        });
    }

  // Adds a json event to event_data
  function new_event_json(name, count, date, day) {
    var event = {
      "occasion": name,
      "invited_count": count,
      "year": date.getFullYear(),
      "month": date.getMonth()+1,
      "day": day
    };
    event_data.events.push(event);
  }

  // Display all events of the selected date in card views
  function show_events(events, month, day) {
      // Clear the dates container
      $(".events-container").empty();
      $(".events-container").show(250);
      console.log(event_data["events"]);
      // If there are no events for this date, notify the user
      if(events.length===0) {
        var event_card = $("<div class='event-card'></div>");
        var event_name = $("<div class='event-name'>There are no events planned for "+month+" "+day+".</div>");
        $(event_card).css({ "border-left": "10px solid #FF1744" });
        $(event_card).append(event_name);
        $(".events-container").append(event_card);
      }
      else {
          // Go through and add each event as a card to the events container
          for(var i=0; i<events.length; i++) {
            var event_card = $("<div class='event-card'></div>");
            var event_name = $("<div class='event-name'>"+events[i]["occasion"]+":</div>");
            var event_count = $("<div class='event-count'>"+events[i]["invited_count"]+" Invited</div>");
            if(events[i]["cancelled"]===true) {
              $(event_card).css({
                "border-left": "10px solid #FF1744"
              });
              event_count = $("<div class='event-cancelled'>Cancelled</div>");
            }
            $(event_card).append(event_name).append(event_count);
            $(".events-container").append(event_card);
          }
        }
      }

  // Checks if a specific date has any events
  function check_events(day, month, year) {
    var events = [];
    for(var i=0; i<event_data["events"].length; i++) {
      var event = event_data["events"][i];
      if(event["day"]===day &&
        event["month"]===month &&
        event["year"]===year) {
        events.push(event);
    }
  }
  return events;
}

  // Given data for events in JSON format
  var event_data = {
    "events": [
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10,
      "cancelled": true
    },
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10,
      "cancelled": true
    },
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10,
      "cancelled": true
    },
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10
    },
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10,
      "cancelled": true
    },
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10
    },
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10,
      "cancelled": true
    },
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10
    },
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10,
      "cancelled": true
    },
    {
      "occasion": " Repeated Test Event ",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 10
    },
    {
      "occasion": " Test Event",
      "invited_count": 120,
      "year": 2017,
      "month": 5,
      "day": 11
    }
    ]
  };

  const months = [ 
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December" 
  ];