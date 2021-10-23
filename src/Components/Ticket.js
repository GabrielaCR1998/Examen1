import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Ticket = (props) => {
    return ( 
        <div className="Tickets">
          {
            Object.keys(props.compra).length!==0     
           ?
            <div>
                <h1>Compra</h1>
                <div>
                  <p>{props.compra.nombre} ({props.compra.idioma})</p>
                  <p>Horario:{props.compra.horarios}</p>
                  <p>Cantidad:<input type='number' value={props.compra.cantidad} onChange={e=>props.calcular(e.target.value,props.compra)}/></p>
                  <p>Total: ${(props.compra.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                  <div>
                    <Button onClick={()=>props.eliminarCompra()}style={{margin:'1vmin'}}>Cancelar</Button> 
                    <Button onClick={()=>props.comprar(props.compra)}>Comprar</Button> 
                  </div>
                </div> 
            </div>   
            :
                <h3>Selecciona una película </h3>
            }
          </div>
     );
}
export default Ticket;