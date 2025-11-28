import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";


export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
    commands: Record<string, CLICommand>,
    readline: Interface,
    pokeApi: PokeAPI,
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;

}


export function initState(): State{
    return {
        commands: getCommands(),
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex >"
        }),
        pokeApi: new PokeAPI(),
        prevLocationsURL: "",
        nextLocationsURL: ""
        
    }
}