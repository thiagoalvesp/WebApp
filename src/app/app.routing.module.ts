import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
const APP_ROUTES: Routes = [
{ path: '', component: LoginComponent },
{ path: 'cadastro', component: CadastroPessoaComponent }
];

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule { }
