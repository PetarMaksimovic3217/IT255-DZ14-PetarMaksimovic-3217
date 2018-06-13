import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DodajSobuComponent } from './dodaj-sobu/dodaj-sobu.component';
import { DodajTipSobeComponent } from './dodaj-tip-sobe/dodaj-tip-sobe.component';
import { SobeComponent } from './sobe/sobe.component';
import { DetaljiSobeComponent } from './detalji-sobe/detalji-sobe.component';
import { IzmeniSobuComponent } from './izmeni-sobu/izmeni-sobu.component';

const routes: Routes = [
  {
    path: '',
    component:AboutusComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dodaj_sobu',
    component:DodajSobuComponent
  },
  {
    path:'dodaj_tip_sobe',
    component:DodajTipSobeComponent
  },
  {
    path:'sobe',
    component:SobeComponent
  },
  {
    path:'detalji_sobe/:id',
    component: DetaljiSobeComponent
  },
  {
    path:'izmeni_sobu/:id',
    component:  IzmeniSobuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
