function initMap() { //Función para iniciar el mapa
    const colCoords = { lat: 4.57, lng: -74.29 }; // Cordenadas de Colombia 
    const map = new google.maps.Map(mapDiv, {
        center: colCoords,
        zoom: 5,
    });

    const marker = new google.maps.Marker({ // Posicionamos un marcador dentro del mapa
        position: colCoords,
        map,
    });

    
    button.addEventListener("click", () => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                ({coords: {latitude, longitude}}) => {
                    const coords = {
                        lat: latitude,
                        lng: longitude,
                    };
                    map.setCenter(coords)
                    map.setZoom(12)
                    //map.setposition(coords)
                    console.log(coords);
                }, 
                () => {
                    alert("Tu navegador esta bien, pero ocurrio un error");
                }
            );
        }   else {
            alert("Navegador del usuario no esta actualizado");
        };
    });
}

