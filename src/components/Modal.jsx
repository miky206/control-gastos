import { useState, useEffect } from 'react'
import React from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto,
    editarGasto,
    setEditarGasto}) => {
    const [mensaje, setMensaje] =  useState('')
    const handleSubmit = e=>{
        e.preventDefault();
        if([nombre, cantidad, categoria].includes('')){
            setMensaje("Todos los campos son obligatorios")
            setTimeout(()=>{
                setMensaje("")
            },3000)
            return
        }
        guardarGasto({nombre, cantidad, categoria,id,fecha})
    }
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')
    
   
    useEffect(()=>{
        if(Object.keys(editarGasto).length>0){
            setCategoria(editarGasto.categoria)
            setCantidad(editarGasto.cantidad)
            setNombre(editarGasto.nombre)
            setFecha(editarGasto.fecha)
            setId(editarGasto.id)
        }
       
    },[])

    const ocultarModal = ()=>{
        setAnimarModal(false)
        setEditarGasto({})
        setTimeout(()=>{       setModal(false) },500)
    }
  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img
                src = {CerrarBtn}
                alt = "boton cerrar modal"
                onClick={ocultarModal}
            />
        </div>
        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar":"cerrar"} `}>
            <legend>{(editarGasto.nombre)?'Editar gasto':'Nuevo gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor ="nombre">Nombre Gasto</label>
                <input
                    id = "nombre"
                    type="text"
                    placeholder='Añade el nombre del gasto.'
                    value = {nombre}
                    onChange = {e=>setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor ="cantidad">Cantidad</label>
                <input
                    id = "cantidad"
                    type="number"
                    placeholder='Añade la cantidad del gasto.'
                    value = {cantidad}
                    onChange = {e=>setCantidad(Number(e.target.value))}
                />
            </div>
            <div className='campo'>
                <label htmlFor ="categoria">Categoría</label>
                <select
                    id = "categoria"
                    value = {categoria}
                    onChange = {e=>setCategoria(e.target.value)}
                >
                    <option value ="">-- Selecciona ---</option>
                    <option value ="ahorro">Ahorro</option>
                    <option value ="comida">Comida</option>
                    <option value ="casa">Casa</option>
                    <option value ="ocio">Ocio</option>
                    <option value ="salud">Salud</option>
                    <option value ="suscripciones">Suscripciones</option>
                </select>

            </div>
            <input
                type ="submit"
                value={(editarGasto.nombre)?"Guardar gasto":"Añadir gasto"}
            />
        </form>
      
    </div>
  )
}

export default Modal
