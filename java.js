// A $( document ).ready() block.
$( document ).ready(function() {

    $(".hamburger-button").click(function(){

        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();
    });

    
});

//for popup gallery
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false,
  });

  //for popup gallery-2
lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false,
  });