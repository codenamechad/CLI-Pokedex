import { stat } from "fs";
import { State } from "./state.js";


export async function commandInspect(state: State, ...args: string[]){
    if(args.length !== 1){
        console.log("You must include the name of a pokemon")
        return
    }
    const pokemon = args[0]
    const pokeInfo = state.pokeDex[pokemon]
    if(!pokeInfo){
        console.log("You have not caught this pokemon")
    }
    console.log(`Name: ${pokeInfo.name}
        Height: ${pokeInfo.height}
        Weight: ${pokeInfo.weight}
        Stats:`)
        for(const stat of pokeInfo.stats){
            console.log(`-${stat.stat.name}: ${stat.base_stat}`)
        }
        console.log("Types:")
        for(const type of pokeInfo.types){
            console.log(`- ${type.type.name}`)
        }
    }