
import Gasto from './Gasto'
const ListadoGastos = ({gastos, setEditarGasto, eliminarGasto,filtro, gastosFiltrados}) => {
  
  return (
    <div>
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos': 'No hay gastos aún'}</h2>
            {
              filtro!="" ?
                gastosFiltrados.map((gasto)=>(
                    <Gasto
                        key = {gasto.id}
                        gasto = {gasto}
                        setEditarGasto={setEditarGasto}
                        eliminarGasto = {eliminarGasto}
                    />
                ))
              :
              
                    gastos.map((gasto)=>(
                    <Gasto
                        key = {gasto.id}
                        gasto = {gasto}
                        setEditarGasto={setEditarGasto}
                        eliminarGasto = {eliminarGasto}
                    />
                ))
              
           
            
            }
        </div>
    </div>
  )
}

export default ListadoGastos
