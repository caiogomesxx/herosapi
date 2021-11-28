import Navs from '../components/Navs'
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import axios from 'axios'
import './hero.css' 
export default function Hero () {
  const  [heroi,setHeroi] = useState([])
  const{ id } = useParams()
 
  useEffect(()=> {
    axios.get(`http://homologacao3.azapfy.com.br/api/ps/metahumans`)
    .then((response)=> {
      setHeroi(response.data)
      
    })
  }, [])
  var name = ""
  var img = ""
  var strength = ""
  var gender = ""
  var race = ""
  if (heroi.length > 0){
  if (heroi[id-1].name !== undefined ) {
    name = heroi[id-1].name
    img = heroi[id-1].images.lg
    strength = heroi[id-1].powerstats.strength
    gender = heroi[id-1].appearance.gender
   race  = heroi[id-1].appearance.race

  }

  }
    return (
    <div>
      <Navs/>
      <main>
      <div className={`hero ${id}`}>
        <img src={img}  alt={`imagem heroi ${name}`}/>
        <div className="items">
        <h3>{name}</h3>
        <p>strength: {strength}</p>
        <p>gender: {gender}</p>
        <p>race: {race}</p>
       
        </div>
      </div>
      </main>
    </div>
  );
}