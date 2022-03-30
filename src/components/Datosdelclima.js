import React, { useState } from 'react'
import Formulario from './Formulario'
import Rain from '../assets/cloud-strom-weather-forecast.gif'
import Clear from '../assets/sunny-weather.gif'
import Clouds from '../assets/sunny-weather-forecast.gif'






export default function Datosdelclima() {

    const [data, setData] = useState(null)

    const getData = async (values) => {
        if (values === '' || undefined) {
            alert('campos incorrectos o vacios')
            return
        }
        const Api_URL = `http://api.openweathermap.org/data/2.5/weather?q=${values}&units=metric&appid=ffb12d2e065b82a33b865cd943778ffa`
        try {
            const res = await fetch(Api_URL)
            const dt = await res.json()
            let image;
            let main;
            switch (dt.weather[0]?.main) {
                case 'Rain':
                    image = Rain
                    main = 'Soleado'
                    break;
                    case 'Drizzle':
                    image = Rain
                    main = 'Llovizna'
                    break;
                case 'Clear':
                    image = Clear
                    main = 'Despejado'
                    break;
                case 'Clouds':
                    image = Clouds
                    main = 'Nublado'
                    break;
                default:
                    break;
            }
            console.log(dt.weather[0]?.main)
            setData({
                name: dt.name,
                temp: dt.main.temp,
                humedad: dt.main.humidity,
                presion: dt.main.pressure,
                tempmin: dt.main.temp_min,
                tempmax: dt.main.temp_max,
                image: image,
                main
            })

            console.log(data)
        }
        catch (error) {
            console.log(error)
            alert('upss! algo salio mal')
        }
    }

    return (
        <>
            <Formulario addTask={getData} />
            <div className="col-lg-8 mx-auto">
                {
                    data && (
                        <>
                            <div className="card mt-2" id="style">
                                <div className="card-body">
                                    <img style={{ height: '200px' }} src={data.image} alt="" />
                                    <h2 className="text-center">{data?.name}</h2>
                                    <h3>Temperatura: {data?.temp}°c</h3>
                                    <h4>humedad: {data?.humedad}</h4>
                                    <h4>presion atmosferica: {data?.presion} p/s</h4>
                                    <h6>min {data?.tempmin}°c</h6>
                                    <h6>max {data?.tempmax}°c</h6>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>

        </>
    )
}
