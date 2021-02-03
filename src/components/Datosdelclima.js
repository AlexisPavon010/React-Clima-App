import React, { useState } from 'react'
import Formulario from './Formulario'


export default function Datosdelclima() {

    const [data, setData] = useState({
        name: '',
        temp: '',
        humedad: '',
        presion: '',
        tempmin: '',
        tempmax: ''
    })

    const getData = async (values) => {
        if (values === '' || undefined) {
            alert('Alert')
        }
        const Api_URL = `http://api.openweathermap.org/data/2.5/weather?q=${values}&units=metric&appid=ffb12d2e065b82a33b865cd943778ffa`
        const res = await fetch(Api_URL)
        const dt = await res.json()
        setData({
            name: dt.name,
            temp: dt.main.temp,
            humedad: dt.main.humidity,
            presion: dt.main.pressure,
            tempmin: dt.main.temp_min,
            tempmax: dt.main.temp_max
        })
        const div = document.getElementById('style').style.display = 'block'
    }

    return (
        <>
            <Formulario addTask={getData} />

            <div className="col-lg-8 mt-5 mx-auto">
                <div className="card" id="style" style={{display: 'none'}} >
                    <div className="card-body">
                        <h2 className="text-center">{data.name}</h2>
                        <h3>Temperatura: {data.temp}°c</h3>
                        <h4>humedad: {data.humedad}</h4>
                        <h4>presion atmosferica: {data.presion} p/s</h4>
                        <h6>min {data.tempmin}°c</h6>
                        <h6>max {data.tempmax}°c</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
