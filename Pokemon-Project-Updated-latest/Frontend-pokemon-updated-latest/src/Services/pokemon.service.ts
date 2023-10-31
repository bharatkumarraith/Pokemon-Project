import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { readmore } from 'src/model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }


  getPokemons(limit:number,offset:number)
  {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

  }


  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }



  //ADD ADMIN


  baseauthurl="http://localhost:9090"

  
  addPokemons(pokemons: any) {
    return this.http.post(`${this.baseauthurl}/addPokemons`, pokemons);
  }
  

  getAllPokemons() {
    return this.http.get<any[]>(`${this.baseauthurl}/getAll`);
  }


  deletePokemonById(id: string) {
    return this.http.delete(`${this.baseauthurl}/Delete-Pokemon-By-Id/${id}`);
  }


  updatePokemon(pokemon: any) {
    return this.http.put<any>(`${this.baseauthurl}/UpdatePokemon`, pokemon);
  }
}
