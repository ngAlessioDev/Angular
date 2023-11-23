import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServerComponent } from './server/server.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListaUsersComponent } from './users/lista-users/lista-users.component';
import { UserComponent } from './users/lista-users/user/user.component';
import { GiochiComponent } from './giochi/giochi.component';
import { CreaGiochiComponent } from './giochi/crea-giochi/crea-giochi.component';
import { ListaGiochiComponent } from './giochi/lista-giochi/lista-giochi.component';
import { GiocoComponent } from './giochi/lista-giochi/gioco/gioco.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServerComponent,
    UsersComponent,
    AddUserComponent,
    ListaUsersComponent,
    UserComponent,
    GiochiComponent,
    CreaGiochiComponent,
    ListaGiochiComponent,
    GiocoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
