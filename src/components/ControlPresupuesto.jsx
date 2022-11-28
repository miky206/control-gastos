import {useEffect, useState} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
const ControlPresupuesto = ({gastos,presupuesto,
    setGastos,
    setPresupuesto,
    setIsValidPresupuesto}) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)
    useEffect(() => {
     const totalGastado = gastos.reduce((total,gasto)=>
     gasto.cantidad + total,0)
     const totalDisponible = presupuesto - totalGastado;
     const nuevoPorcentaje = (((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2)
     setTimeout(()=>{
      setPorcentaje(nuevoPorcentaje);
     },1500);
     
     setDisponible(totalDisponible);
     setGastado(totalGastado);
    }, [gastos]);
    const formatearCantidad = (cantidad)=>{
        return cantidad.toLocaleString('es-ES',{
            style:"currency",
            currency : "EUR"
        })
    }
    const handleResetApp = ()=>{
      const resultado = confirm('¿Estas seguro de borrar los datos de la aplicación')
      if(resultado){
          setGastos([]);
          setPresupuesto(0);
          setIsValidPresupuesto(false);
      }
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626':'#3b82f6',
            trailColor: '#f5f5f5',
            textColor: porcentaje > 100 ? '#DC2626':'#3b82f6'
          })}
          value = {porcentaje}
          text = {`${porcentaje}% Gastado`}
        />

      </div> 
      <div className='contenido-presupuesto'>
          <button
            className='reset-app'
            onClick={handleResetApp}
          >Resetear app</button>
          <p>
              <span>Prespuesto:</span> {formatearCantidad(presupuesto)}
          </p>
          <p className={`${disponible<0?'negativo':''}`}>
              <span>Disponible:</span> {formatearCantidad(disponible)}
          </p>
          <p>
              <span>Gastado:</span> {formatearCantidad(gastado)}
          </p>
      </div>
      
    </div>
  )
}

export default ControlPresupuesto
