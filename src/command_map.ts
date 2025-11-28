import { State } from "./state";



export async function commandMap(state : State){
    let results;
    if(!state.nextLocationsURL){
        results = await state.pokeApi.fetchLocations()
    }else{
        results = await state.pokeApi.fetchLocations(state.nextLocationsURL)
    }
    state.nextLocationsURL = results.next ?? "";
    state.prevLocationsURL = results.previous ?? "";
    for(const result of results.results){
        console.log(result.name)
    }

}