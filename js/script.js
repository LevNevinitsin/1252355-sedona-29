var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCHJ6TLWFKJ82-2FSCHAAxODPnRq6l-wsc&callback=initMap';
script.defer = true;

document.head.appendChild(script);

window.initMap = function() {
  var sedona = {lat: 34.754709, lng: -111.730902};
  var sedonaMarker = {lat: 34.869709, lng: -111.760902};
  var map = new google.maps.Map(
    document.querySelector(".container-map"), {
      center: sedona,
      zoom: 9,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
      },
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
      },
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER,
      },
    });
  var marker = new google.maps.Marker({position: sedonaMarker, map: map});
};
