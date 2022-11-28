
import {
        LeadingActions, 
        SwipeableList, 
        SwipeableListItem, 
        SwipeAction,
        TrailingActions}
from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatearFecha } from '../helpers';
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioObjetos = {
    ahorro:IconoAhorro,
    comida:IconoCasa,
    casa:IconoCasa,
    gastos:IconoGastos,
    ocio:IconoOcio,
    salud:IconoSalud,
    suscripciones:IconoSuscripciones
}
const Gasto = ({gasto, setEditarGasto, eliminarGasto}) => {
    const{categoria, nombre, cantidad, id,fecha} = gasto;
    
    const leadingActions = ()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>{
                setEditarGasto(gasto)
              
                }}>
                Editar
            </SwipeAction>
        </LeadingActions>

    ) //usamos parentesis porque hay un retorno, en este el componente
    const trailingActions=()=>(
        <TrailingActions>
            <SwipeAction 
                destructive = {true}
                onClick={()=>{
                eliminarGasto(id)
            }}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
  return (
    <div>
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions = {trailingActions()}
        >
            <div className='gasto sombra'>
                <div className='contenido-gasto'>
                    <img
                        src = {diccionarioObjetos[categoria]}
                        alt ="Icono Gasto"

                    />
                    <div className='descripcion-gasto'>
                        <p className='categoria'>
                            {categoria}
                        </p>
                        <p className='nombre-gasto'>
                            {nombre}
                        </p>
                        <p className='fecha-gasto'>
                            Añadido el : {''}
                            <span>{formatearFecha(fecha)}</span>
                        </p>
                    </div>
                
                </div>
                <p className='cantidad-gasto'>
                    €{cantidad}  
                </p>
            </div>
        </SwipeableListItem>
      </SwipeableList>
    </div>
  )
}

export default Gasto
