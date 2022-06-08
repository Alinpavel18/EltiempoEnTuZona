window.addEventListener('load' , ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            //lat y lon por consola
            //console.log(posicion)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            //Ubicacion actual
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=fbaf1c12705b2c56abf2ede32ef16cc2`
                

                fetch(url)
                    .then ( Response => {return Response.json()})
                    .then (data =>{
                    
                        let temp = Math.round(data.main.temp)
                        temperaturaValor.textContent = `${temp} °C`
                        let desc = data.weather[0].description
                        temperaturaDescripcion.textContent = desc.toUpperCase()
                        ubicacion.textContent = data.name
                        vientoVelocidad.textContent = `${data.wind.speed} m/s`
                        data.weather[0].description

                        //iconos animados 

                        switch (data.weather[0].main) {
                            case 'Clear':
                                iconoAnimado.src = 'animated/day.svg'
                            console.log('LIMPIO')
                            break;

                            case 'Clouds':
                                iconoAnimado.src = 'animated/cloudy-day-1.svg'
                            console.log('NUBES')
                            break;

                            case 'Thunderstorm':
                                iconoAnimado.src = 'animated/thunder.svg'
                            console.log('TORMENTA')
                            break;

                            case 'Drizzle':
                                iconoAnimado.src = 'animated/rainy-2.svg'
                            console.log('LLOVIZNA')
                            break;

                            case 'Rain':
                                iconoAnimado.src = 'animated/rainy-7.svg'
                            console.log('LLUVIA')
                            break;

                            case 'Snow':
                                iconoAnimado.src = 'animated/snowy-6.svg'
                            console.log('NIEVE')
                            break;

                            case 'Atmosphere':
                                iconoAnimado.src = 'animated/weather.svg'
                            console.log('ATMOSFERA')
                            break;

                            default:
                                iconoAnimado.src = 'animated/cloudy-day-1.svg'
                                console.log('POR DEFECTO')
                                break;
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    })
        })
    }
})