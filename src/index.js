var map;
var iw;
var svc;
function initMap() {
    var nyc = new google.maps.LatLng(40.754, -73.999);
    iw = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
        center: nyc,
        zoom: 8
    });
    var request = {
        query: document.getElementById("searchBar").textContent,
        fields: ["name", "geometry"]
    };
    svc = new google.maps.places.PlacesService(map);
    svc.findPlaceFromQuery(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; ++i) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}
function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, "click", function () {
        iw.setContent(place.name);
        iw.open(map);
    });
}
