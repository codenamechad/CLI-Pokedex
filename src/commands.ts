import { CLICommand } from "./state";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help:{
        name: "help",
        description: "Displays a help message",
        callback: commandHelp
    },
     map:{
        name: "map",
        description: "Displays 20 locations",
        callback: commandMap
    },
    mapb:{
      name: "mapb",
      description: "Displays previous 20 locations",
      callback: commandMapB
    }, 
    explore:{
      name: "explore",
      description: "Displays pokemon from a region of the map",
      callback: commandExplore
    },
    catch:{
      name: "catch",
      description: "Attempts to catch a desired pokemon",
      callback: commandCatch
    },
    inspect: {
      name: "inspect",
      description: "Gives details of caught pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Lists the names of your caught pokemon",
      callback: commandPokedex

    }
  };
}