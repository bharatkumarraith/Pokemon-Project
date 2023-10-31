import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from 'src/Services/pokemon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent {


pokemons: any;
itemsPerPage:any;
p:any;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe((data) => {
      this.pokemons = data;
      console.log(data);
      // Handle the retrieved Pokémon data as needed
    });
  }

  delete(id: string) {
    this.pokemonService.deletePokemonById(id).subscribe((data) => {
      // Remove the deleted Pokemon from the local data (pokemons array)
      this.pokemons=data;
      this.getAllPokemons();
      Swal.fire({
        icon: 'success',
        title: 'Delete Successful',
        text: 'The Pokémon was updated successfully.',
      });
    });
  }
  


  isEditMode = false;

  editdocuments = new FormGroup({
    "id": new FormControl(),                                
    "name": new FormControl(),
    "height": new FormControl(),
    "order": new FormControl(),
    "base_experience": new FormControl(),
    "sprites": new FormControl()
  });

  updatePokemon(pokemon: any) {
    this.editdocuments.setValue(pokemon);
    this.isEditMode=true;
  }

  sendupdateDocumentData()
  {
this.pokemonService.updatePokemon(this.editdocuments.value).subscribe((res)=>{
  this.pokemons=res;
  this.getAllPokemons();
  Swal.fire({
    icon: 'success',
    title: 'Update Successful',
    text: 'The Pokémon was updated successfully.',
  });
this.isEditMode=false;
})
  }


  readMoreStates: boolean[] = []; // Array to track Read More states for each card

  // ... other functions and logic for update and delete operations

  toggleReadMore(index: number) {
    this.readMoreStates[index] = !this.readMoreStates[index];
  }
  searchQuery: string = '';
  search() {
    if(this.searchQuery == "")
    {
      this.ngOnInit();
    }
    else{
      this.pokemons=this.pokemons.filter((res: { name: string; })=>{
    return res.name?.toLowerCase().match(this.searchQuery.toLocaleLowerCase());
      })
    }
  }

}
