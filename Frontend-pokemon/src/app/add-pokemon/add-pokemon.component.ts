import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PokemonService } from 'src/Services/pokemon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent {



  constructor(private service:PokemonService,private fb:FormBuilder){}

//add admin

livestream = this.fb.group({

  id: ['', [Validators.required, Validators.maxLength(100)]],
  name:['',[Validators.required]],
type:['',[Validators.required,Validators.minLength(2)]],
height: ['', [Validators.required, Validators.maxLength(100)]],
health:['',[Validators.required]],
power:['',[Validators.required,Validators.minLength(2)]],

 

});
get id() { return this.livestream.get("id") }
get name() { return this.livestream.get("name") }
get type() { return this.livestream.get("type") }
get height() { return this.livestream.get("id") }
get health() { return this.livestream.get("name") }
get power() { return this.livestream.get("type") }





onSubmit()
{
  console.log(this.livestream.value);
  this.service.addPokemon(this.livestream.value).subscribe(
    response=>{
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Admin added successfully!',
      });
    }
    
  )

  
 this.livestream.reset();

}





}
