import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from 'src/Services/pokemon.service';
import { AddPokemonComponent } from '../add-pokemon/add-pokemon.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
 readmores:any;
pokemons:any[]=[];
filteredPokemons: any[] = [];
searchQuery: string = '';
page=1;
totalPokemons: number | undefined; 


   constructor(private service:PokemonService,public dialog: MatDialog){}
   ngOnInit(): void {
    
this.getPokemons();

   
  }
  










  getPokemons()
  {
    this.service.getPokemons(10,this.page+0).subscribe((response: any) => {
     
      this.totalPokemons=response.count;
      
            if (Array.isArray(response.results)) {
              response.results.forEach((element: any) => {
                const pokemonName = element.name; 
                this.service.getMoreData(pokemonName).subscribe((res: any) => {
                  this.pokemons.push(res);
                  console.log(this.pokemons);
                });
              });
            } else {
              console.error('Response does not contain an array of results:', response);
            }
          });
  }
 
  search() {
    if(this.searchQuery == "")
    {
      this.ngOnInit();
    }
    else{
      this.pokemons=this.pokemons.filter(res=>{
    return res.name?.toLowerCase().match(this.searchQuery.toLocaleLowerCase());
      })
    }
  }
  
  showDetails: boolean[] = []; 

  toggleDetails(index: number) {
    this.showDetails[index] = !this.showDetails[index];
  }


  openDialog(): void {
    this.dialog.open(AddPokemonComponent);
 }

 add() {
  this.service.addPokemons(this.pokemons).subscribe((response) => {
 
    console.log('Pokemons added:', response);
    Swal.fire({
      icon: 'success',
      title: 'added Successful',
      text: 'The Pokémons was added successfully.',
    });
  });
}


}
