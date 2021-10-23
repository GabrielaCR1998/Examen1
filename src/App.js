import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Ticket from './Components/Ticket';
import Movies from './Components/Movies';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <Header/>
        <div className="Cinepolis">          
          <Movies
            cartelera={this.state.cartelera}
            agregar={this.agregar}
          />
          <Ticket
            compra={this.state.compra}
            calcular={this.calcular}
            eliminarCompra={this.eliminarCompra}
            comprar={this.comprar}
          />          
        </div>
      </div>
    )
  }
  constructor() {
    super();
    this.state = {
      compra:{},
      cartelera:[
        {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
        {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
        {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
        {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
      ],
    };
  }    
  agregar=(pelicula,horarios)=>{
      const temp={
        codigo:pelicula.codigo,
        nombre:pelicula.nombre, 
        idioma:pelicula.idioma, 
        clasificacion:pelicula.clasificacion,
        horarios:horarios,
        duracion:pelicula.duracion,
        cantidad:0,
        total:0
      }
       this.setState({...this.state, compra:temp})    
  }
  calcular=(num_boletos,pelicula)=>{
    let costo;
    if(pelicula.clasificacion==='A') costo=50;
    if(pelicula.clasificacion==='B') costo=80;      
    if(pelicula.clasificacion==='C') costo=95;
    const temp={
      codigo:pelicula.codigo,
      nombre:pelicula.nombre, 
      idioma:pelicula.idioma, 
      clasificacion:pelicula.clasificacion,
      cantidad:num_boletos,
      total:num_boletos*costo
    }
    if(num_boletos<=0)
    {
      temp.total=0
    }    
    this.setState({...this.state, compra:temp,})
  }
  comprar=(pelicula)=>{
    if(pelicula.cantidad>0)
    {
      Swal.fire({
        title: 'Compra realizada',
        text: 'Disfrute la pelicula',
        imageUrl: 'https://i.pinimg.com/originals/93/7c/28/937c28e56fe63a5565f330e1ec2a675a.png',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Custom image',
      }) 
    }else if(pelicula.cantidad<=0)
    {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese la cantidad de boletos que desea',
        imageUrl: 'https://1.bp.blogspot.com/-gTK4O1JrhuE/YH7Sr9hhjAI/AAAAAAABLrQ/lPmu0BKxgH0zb3EJoJ_7w69jiHZ3SM9DQCLcBGAsYHQ/s960/Slide2%2B%25281%2529.JPG',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Custom image',
      })
      this.setState({...this.state, compra:[],})
    }
  } 
  eliminarCompra=()=>{
    this.setState({...this.state, compra:[],})
  }  
}
export default App;
