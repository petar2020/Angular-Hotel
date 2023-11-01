import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmestajListaComponent } from './smestaj-lista/smestaj-lista.component';
import { DodavanjeSobeComponent } from './dodavanje-sobe/dodavanje-sobe.component';

@NgModule({
  declarations: [
    AppComponent,
    SmestajListaComponent,
    DodavanjeSobeComponent
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
