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
          const pokemonSpeciesUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
            return( 
                <div className="pokeView--pokedex" key={index}>
                   <img src={pokemonSpeciesUrl} alt=""/>
                  <NavLink className="pokeView--navigation" to={`chosen/${index}`} >{pokemons.name.toLowerCase()
                  .split(' ')
                  .map((s:any) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}</NavLink>
                </div>
              ) 
          })
        } 
    </div>
    )
  }
}

export default PokeView
