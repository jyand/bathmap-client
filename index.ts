let map: google.maps.Map ;
let iw: google.maps.InfoWindow ;
let svc: google.maps.places.PlacesService ;
const defaultLocation = new google.maps.LatLng(, ) ;

class request {
        query: string ,
        fields =  ['name', 'geometry'],
}

function initMap(searchTerm:string): void {
        iw = new google.maps.InfoWindow() ;
        map = new google.maps.Map(document.getElementById("map") as HTMLElement, {center: defaultLocation, zoom: 8}) ;
        svc = new google.maps.places.PlacesService(map) ;

        var q = new request(searchTerm,) ;
        svc.findPlaceFromQuery(q, function(results, status)) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (let i:number = 0 ; i < results.length ; ++i) {
                                createMarker(results[i]) ;
                        }
                        map.SetCenter(results[0].geometry.location) ;
                }
        }
}
