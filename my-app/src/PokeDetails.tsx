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
            stats: [],
            types: [],
            weight: 0,
            height: 0,
            eggGroups: '',
            hatch_Steps: 0,
            abilities: [],
            evs: ''
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


  public getImage() {
    const pokemonSpeciesUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.props.match.params.pokemonIndex}.png?raw=true`;
    return pokemonSpeciesUrl;
  }
  public render(){
      const pokemon = this.state.pokemon;
    return (
        <div>
            <div className="pokeDetail--type">
                <div className="pokeDetail--type__text">
                {
                    pokemon.types.map((el:any, key)=>{
                        return <div className="pokeDetail--" key={el.type.name} >{el.type.name.toLowerCase()
                            .split(' ')
                            .map((s:any) => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')}</div>
                    })
                }
                </div>
            </div>
            <div className={"pokeDetail"}>
                <div className="pokeDetail--box">
                    <img className="pokeDetail--imgPokemon" src={this.getImage()} alt=""/>
                    <div className="pokeDetail--name">{pokemon.name.toLowerCase()
                        .split(' ')
                        .map((s:any) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}
                    </div>
                    {
                        pokemon.stats.map((el:any, key)=>{
                            return <div className="pokeDetail--details" key={el.stat.name}>{el.stat.name.toLowerCase()
                                .split(' ')
                                .map((s:any) => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')}: {el.base_stat}</div>
                        })
                    }
                </div>
            </div>
            <div className={"pokeDetail"}>
                <div className="pokeDetail--boxProfile">
                    <div className="pokeDetail--nameProfile">
                        Profile
                    </div>
                    <div className="pokeDetail--profilDetail">Weight: {pokemon.weight} lbs</div>    
                    <div className="pokeDetail--profilDetail">Height: {pokemon.height} ft.</div>
                    <div  className="pokeDetail--profilDetail">
                      <div className="pokeDetail--ability">  Abilities: 
                        {
                            pokemon.abilities.map((el:any, key)=>{
                                return <div className="pokeDetail--detailsAbility" key={el.ability.name}>{el.ability.name}</div>
                            })
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default PokeDetails