import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from "./pokeapi.js";


export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    commands: Record<string, CLICommand>,
    readline: Interface,
    pokeApi: PokeAPI,
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
    pokeDex: Record<string, Pokemon>

}



export function initState(): State{
    return {
        commands: getCommands(),
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex >"
        }),
        pokeApi: new PokeAPI(1000),
        prevLocationsURL: "",
        nextLocationsURL: "",
        pokeDex: {}
        
    }
}