import React from 'react'
import '../style/bootstrap.min.css'
import { useState } from 'react'

export default function Formulario(props) {

    const [values, setValues] = useState({
        city: ''
    })

    const handleChange = (e)=> {
        const {value} = e.target
        setValues(value);
    }


    const handleSubmit = (e)=> {
        e.preventDefault()
        props.addTask(values)
    }


    return (
        <div className="col-lg-8 mt-5 mx-auto">
            <div className="card card-body">
                <h1 className="text-center">App Clima</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <input onChange={handleChange} name="city" type="text" className="form-control" placeholder="Ciudad..." autoFocus="autofocus" />
                    </div>
                    <button className="btn btn-success btn-block">Buscar</button>
                </form>
            </div>
            <div id="root" className="mt-4">
                
            </div>
        </div>
    )
}
