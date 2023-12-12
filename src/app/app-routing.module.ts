import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { HomeComponent } from './home/home.component';
import { IzmenaSobeComponent } from './izmena-sobe/izmena-sobe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ponuda', component: PonudaComponent },
  { path: 'preporuka', component: PreporukaComponent },
  { path: 'o-nama', component: ONamaComponent },
  { path: 'izmena-sobe/:id', component: IzmenaSobeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
