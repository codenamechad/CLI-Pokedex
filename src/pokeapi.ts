import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache = new Cache(3000)
  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    
    if(pageURL){
        const cacheEntry = this.#cache.get<ShallowLocations>(pageURL)
        if(cacheEntry){
            return cacheEntry
        }
        const response = await fetch(pageURL);
        const data: ShallowLocations = await response.json();
        this.#cache.add(pageURL,data)
        return data
    }
       const url = PokeAPI.baseURL + "/location-area"
        const cachedMain = this.#cache.get<ShallowLocations>(url)
        if(cachedMain){
            return cachedMain
        }
        const response = await fetch(url)
        const data: ShallowLocations = await response.json()
        this.#cache.add(url, data)
        return data
  }

  async fetchLocation(locationName: string): Promise<Location> {
    throw new Error("Not implemented yet");
  }
}

export type ShallowLocations = {
  next: string | null;
  previous: string | null;
  count: number;
  results: {name: string, url: string}[];
};

export type Location = {

};