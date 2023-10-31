import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'cards', component: PokemonListComponent },
  { path: 'pokemoncards', component: AddPokemonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
