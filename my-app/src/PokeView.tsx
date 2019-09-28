import React from 'react'
import {IPoke} from './PokeModel'

type PokeViewS = {
  pokemons:Array<IPoke>
}

export class PokeView extends React.Component<PokeViewS,any> {

  constructor(props:any){
    super(props)
    this.state = {
        pokemons:[]
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(resp => resp.json())
    .then(resp => {
        this.setState({
            pokemons:resp
        })
        console.log(resp)
    })
  }
  public render(){
    const {pokemons} = this.state;
    return(
    <div>
        { 
          Object.keys(pokemons).map((index)=>{
          return (
                <div>
                {/* <div>{pokemons.id}</div> */}
                <div> {pokemons[index].name}</div>
                {/* <div> {pokemons.growth_time}</div>
                <div> {pokemons.max_harvest}</div>
                <div> {pokemons.natural_gift_power}</div>
                <div> {pokemons.size}</div> */}
                </div>
             )
          })
        } 
    </div>
    )
  }
}

export default PokeView
