import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonPreviewComponent } from './pokemon-preview/pokemon-preview.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonAttackComponent } from './pokemon-attack/pokemon-attack.component';
import { PokemonTypeIconComponent } from './pokemon-type-icon/pokemon-type-icon.component';
import { PokemonPreferitiComponent } from './pokemon-preferiti/pokemon-preferiti.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonPreviewComponent,
    PokemonSearchComponent,
    NavbarComponent,
    PokemonDetailComponent,
    PokemonAttackComponent,
    PokemonTypeIconComponent,
    PokemonPreferitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
