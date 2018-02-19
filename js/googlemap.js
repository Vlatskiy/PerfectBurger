function initMap() {
    var uluru = {lat: 59.930368, lng: 30.316481};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: uluru,
      zoomControl: true,
      zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER}
    });
    var image = '/images/icons/map-marker.svg';
    var locations = [
        {lat: 59.972897, lng: 30.310892},
        {lat: 59.944389, lng: 30.382768},
        {lat: 59.840243, lng: 30.312454},
        {lat: 59.893285, lng: 30.466180},]
        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
              position: location,
              icon: image
            });
        });
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }