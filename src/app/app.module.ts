import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmestajListaComponent } from './smestaj-lista/smestaj-lista.component';
import { DodavanjeSobeComponent } from './dodavanje-sobe/dodavanje-sobe.component';
import { BarComponent } from './bar/bar.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SmestajListaComponent,
    DodavanjeSobeComponent,
    BarComponent,
    PonudaComponent,
    PreporukaComponent,
    ONamaComponent,
    HomeComponent
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
