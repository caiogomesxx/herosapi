import React from 'react';
import api from "../api";
import {Link} from 'react-router-dom'
import './cards.css'




export default class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heroisOriginal: [],
      herois: []
    }
  }

  componentDidMount() {
    api.get("")
      .then((response) => this.setHerois(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }

  setHerois(dados) {
    this.setState({
      heroisOriginal: dados,
      herois: dados
    })
  }

  pesquisar(item) {
    const { heroisOriginal } = this.state;
    const filter = heroisOriginal.filter(herois => (herois.name.toLowerCase()).includes(item.toLowerCase()))
    this.setState({
      herois: filter
    })
  }

  render() {
    const {  herois } = this.state;

    return (
      <main>
        <div>
         <input placeholder="Pesquisar Herói" onChange={(e) => this.pesquisar(e.target.value)} />
        </div>
          {herois.map((item, index) => (
            
             <Link to={`/hero/${item.id}`} className="links">
    <div key={index} className={`hero-card ${item.id}`}>
   <img  src={item.images.sm}  alt={`imagem herói ${item.name}`}/>
     
     <p> {item.name} </p>
     
   
    </div>
    </Link> ))}
    </main>
    );
  }
}