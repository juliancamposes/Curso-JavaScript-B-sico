//admite tres parámetros, el único boligatorio es el callback
//navigator.geolocaltion.watchtPosition(callback, error, timeout)
function geoPosiciona(){
    if(navigator.geolocation){
         navigator.geolocation.watchPosition(position => {
            //las coordenadas las podemos tener por position.coords.funcion
            console.log(position.coords.longitude)
            console.log(position.coords.latitude)
        }, error => console.error(error), {timeout : 5000})
    } else {
        alert("tu navegador no admite geolocalizacion")
    }
} 

geoPosiciona()



