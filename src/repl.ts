import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { text } from 'node:stream/consumers';
import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { CLICommand, State } from './state.js';







export function cleanInput(input:string): string[]{
return input.trim().toLowerCase().split(' ').filter(e => e.length > 0);
}




export async function startREPL(state: State, ...args: string[]){
    state.readline.prompt()
    state.readline.on("line", async (text) => {
        const parts = cleanInput(text)
        const commandName = parts[0]
        const command = state.commands[commandName]
        const args = parts.slice(1)
        if(command){
            try{
             await command.callback(state, ...args)
        } catch(err) {
            console.error("Error:", err)
        }
    }
        else{
            console.log("Unknown command")
        }
       state.readline.prompt()
    })
    }
