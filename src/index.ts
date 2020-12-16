let map: google.maps.Map ;
let iw: google.maps.InfoWindow ;
let svc: google.maps.places.PlacesService ;


function initMap(): void {
        const nyc = new google.maps.LatLng(40.754, -73.999) ;
        iw = new google.maps.InfoWindow() ;
        map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                center: nyc, 
                zoom: 8,
        }) ;

        var request = {
                query: document.getElementById("searchBar").textContent, 
                fields: ["name", "geometry"],
        } ;

        svc = new google.maps.places.PlacesService(map) ;
        svc.findPlaceFromQuery(request, (
                results: google.maps.places.PlaceResult[],
                status: google.maps.places.PlacesServiceStatus
        ) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (let i: number = 0 ; i < results.length ; ++i) {
                                createMarker(results[i]) ;
                        }
                        map.setCenter((results[0].geometry as google.maps.places.PlaceGeometry).location) ;
                }
        }) ;
} 

function createMarker(place: google.maps.places.PlaceResult) {
        const marker = new google.maps.Marker({
                map,
                position: (place.geometry as google.maps.places.PlaceGeometry).location,
        }) ;

        google.maps.event.addListener(marker, "click", () => {
                iw.setContent(place.name);
                iw.open(map);
        });
}
