import { State } from "./state.js"

export async function commandPokedex(state: State, ...args: string[]){
    if(args.length > 0){
        console.log("This command doesnt take any arguments")
    }
    console.log("Your Pokedex:")
    for(const key of Object.keys(state.pokeDex)){
        console.log(`- ${key}`)
    }
}