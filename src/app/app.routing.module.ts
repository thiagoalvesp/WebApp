import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { MapaComponent } from './mapa/mapa.component';

const APP_ROUTES: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'motoristas', component: CadastroPessoaComponent },
{ path: 'passageiros', component: CadastroPessoaComponent },
{ path: 'mapa', component: MapaComponent },
{ path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule { }
