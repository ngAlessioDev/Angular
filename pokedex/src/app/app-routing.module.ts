import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonPreviewComponent } from './pokemon-preview/pokemon-preview.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonPreferitiComponent } from './pokemon-preferiti/pokemon-preferiti.component';

const routes: Routes = [
  {path: 'pokemon', component: PokemonSearchComponent},
  {path: 'pokemon/preview', component: PokemonPreviewComponent},
  {path: "pokemon/preferiti", component: PokemonPreferitiComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
  {path: "", redirectTo: "/pokemon", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
