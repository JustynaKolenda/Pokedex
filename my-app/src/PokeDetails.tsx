import React from 'react';
import { IPokemon } from './PokeModel';

type PokeDetailsS = {
    pokemon: IPokemon
}

export class PokeDetails extends React.Component<any, PokeDetailsS> {

  constructor(props:any){
    super(props)
    this.state = {
     pokemon: {
        name: '',
        growth_time: 0,
        max_harvest: 0,
        natural_gift_power: 0,
        size: 0,
        smoothness: 0,
        soil_dryness: 0,
        firmness: {
            name: '',
            url: '',
        },
        flavors: [{
            potency: 0,
            flavor: {
                name: '',
                url: '',
            }
        }],
        item: {
            name: '',
            url: '',
        },
        natural_gift_type: {
            name: '',
            url:  ''
        }
    }
    }
  }

  public componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemonIndex}`)
    .then(resp => resp.json())
    .then(resp => {
        this.setState({
            pokemon: resp
            
        })
    })
  }

  public render(){
      const pokemon = this.state.pokemon;
      console.log(pokemon)
    return (
        <div>
            <div>{pokemon.name}</div>
            <p>{pokemon.growth_time}</p>
            <p>{pokemon.max_harvest}</p>
            <p>{pokemon.natural_gift_power}</p>
            <p>{pokemon.size}</p>

        </div>
    )
}
}

export default PokeDetails