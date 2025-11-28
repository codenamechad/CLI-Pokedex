import { State } from "./state.js";

export async function commandMapB(state: State){
    if(!state.prevLocationsURL){
        console.log("You are at the first page of locations")
    }else{
        let results = await state.pokeApi.fetchLocations(state.prevLocationsURL)
        state.prevLocationsURL = results.previous ?? "";
        state.nextLocationsURL = results.next ?? "";
        for(const result of results.results){
            console.log(result.name)
        }
    }
}