 function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(54.508622, 30.428352),
        zoom: 16,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var myLatLng = new google.maps.LatLng(54.5084, 30.42825);
    var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
 }
    google.maps.event.addDomListener(window, 'load', initialize);
