  //Current year of copyright
  $('#year').text(new Date().getFullYear());
  
  // 1. *********Index.html**********

  //  Configure Slider
  $('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
  })

  // video play

  $(function () {
    // Auto play modal video
    $(".video").click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  });

  // Lightbox Init
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // *********Index.html ends**********


  // 2. *********About.html**********

  // Slider at About.html

  $('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
  })

  // *********About.html ends**********


