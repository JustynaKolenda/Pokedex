import React from 'react'
import {IPoke} from './PokeModel'
import { NavLink } from 'react-router-dom';

type PokeViewS = {
  pokemons:Array<IPoke>,
}

type Props = {
    //
}

export class PokeView extends React.Component<Props, PokeViewS> {

  constructor(props:any){
    super(props)
    this.state = {
        pokemons: []
    }
  }

  componentDidMount(){
    this.getPokemon()
  }

  public getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(resp => resp.json())
    .then(resp => {
        this.setState({
            pokemons: resp.results
            
        })
    })
  }

 
  public render(){
    return(
    <div>
        { 
          this.state.pokemons.map((pokemons:any, key) =>{
          const index = pokemons.url.split('/')[pokemons.url.split('/').length - 2]

            return( 
                <div className="pokeView--pokedex" key={index}>
                  <div >{pokemons.name} </div>
                  <NavLink className="pokeView--navigation" to={`chosen/${index}`} >Szczegóły</NavLink>
                </div>
              ) 
          })
        } 
    </div>
    )
  }
}

export default PokeView
