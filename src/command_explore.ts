import { State } from "./state";



export async function commandExplore(state: State, ...args: string[]){
    const areaName = args[0]
    if(areaName){
       const location = await state.pokeApi.fetchLocation(areaName)
       console.log(`Exploring ${areaName}...`);
       console.log("Found Pokemon:")
       for(const p of location.pokemon_encounters){
        console.log(` - ${p.pokemon.name}`)
       }
    }
}