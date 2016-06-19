$(document).ready(function(){
   $('.slick-slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
         responsive: [
            {
              breakpoint: 1200,
              settings: {
                variableWidth: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                variableWidth: false,
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                 variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1,      
              }
            }
          ]
      });

    ymaps.ready(init);
      var myMap,
          myPlacemark;

      function init(){     
          myMap = new ymaps.Map("map", {
              center: [45.01376580, 39.05688000],
              zoom: 15
          });

          myPlacemark = new ymaps.Placemark([45.01376580, 39.05688000], { 
              hintContent: 'Трамвайная 1,1', 
              balloonContent: 'Трамвайная 1,1' 
          });

          myMap.geoObjects.add(myPlacemark);
          myMap.behaviors.disable('scrollZoom');
          myMap.controls.remove('searchControl');
          myMap.controls.remove('trafficControl');
          myMap.controls.remove('fullscreenControl');
          myMap.controls.remove('geolocationControl');
          myMap.controls.remove('layerControl');
      }

    $('.drawer').drawer({
        iscroll:{
        }
      }
    );  

 // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });  
});