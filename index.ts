let map: google.maps.Map ;
let iw: google.maps.InfoWindow ;
let svc: google.maps.places.PlacesService ;

function initMap(): void {
        map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 }, zoom: 8, }) ;
}
