mapkit.init({
    authorizationCallback: function(done) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/services/jwt");
        xhr.addEventListener("load", function() {
            done(this.responseText);
        });
        xhr.send();
    }
});

var Cupertino = new mapkit.CoordinateRegion(
    new mapkit.Coordinate(37.3316850890998, -122.030067374026),
    new mapkit.CoordinateSpan(0.167647972, 0.354985255)
);
var map = new mapkit.Map("map");
map.region = Cupertino;
