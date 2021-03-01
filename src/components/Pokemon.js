import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Pokemon() {
    const [poke, setPoke] = useState({
        abilities: [],
        moves: []
    })
    useEffect(() => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((response) => setPoke(response.data))
    }, [])
    const listAbility = poke.abilities
    const listAbilities = () =>{
        return listAbility.map((value, id)=> {
        return  <div key={id}>
                <p>{value.ability.name}</p>
            </div>
        })
    }

    const listMoves = poke.moves
    const moveList = () => {
        return listMoves.map((value, id)=> {
            return  <div key={id}>
                    <p>{value.move.name}</p>
                </div>
            })
    }
    
    return (
        <div>
           <h3>{poke.name}</h3>
           <h4>Abilities List :</h4>
           <ul>
           <li>{listAbilities()}</li>
           </ul>
           <ul>
           <h4>Moves List :</h4>
           <li>{moveList([0])}</li>
           </ul>
        </div>
    )
}

