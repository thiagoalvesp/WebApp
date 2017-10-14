import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { MapaComponent } from './mapa/mapa.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './guards/auth.guard';
import { PessoasGuard } from './guards/pessoa.guard';
import { MapaGuard } from './guards/mapa.guard';

const APP_ROUTES: Routes = [

{ path: 'pessoas',
    loadChildren: 'app/pessoas/pessoas.module#PessoasModule',
    canActivate: [AuthGuard],
    canActivateChild: [PessoasGuard],
    canLoad: [AuthGuard]
},
{ path: 'mapa',
    loadChildren: 'app/mapa/mapa.module#MapaModule',
    canActivate: [AuthGuard],
    canActivateChild: [MapaGuard],
    canLoad: [AuthGuard]
 },
{ path: 'home',
     component: HomeComponent ,
     canActivate: [AuthGuard]
},
{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule { }
