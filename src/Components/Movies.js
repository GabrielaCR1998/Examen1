import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Movies (props) 
{
    return (
        <div>
            <h1>Cartelera</h1>
              {
                props.cartelera.map((p,i)=>{
                  return (
                     <div className="Cartelera" key={i}>                    
                          <img src={p.url} alt={p.nombre} />
                        <div className="Informacion_cartelera">
                            <p>{p.nombre}</p>
                            <p>{p.idioma}</p>
                            <p>{p.clasificacion}</p>
                            <p>{p.duracion}</p>
                            {p.horarios.map((h,ind)=>
                            <Button key={ind} onClick={()=>props.agregar(p,h)}style={{margin:'1vmin'}}>{h}</Button>)}
                        </div>
                      </div>)
                })
              }          
        </div>
    )
}
