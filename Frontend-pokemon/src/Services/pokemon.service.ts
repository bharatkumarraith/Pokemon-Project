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
  addPokemon(addPokemon:any)
  {
    return this.http.post(this.baseauthurl+"/addPokemon",addPokemon)
  }
  
}
