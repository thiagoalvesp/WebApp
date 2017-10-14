import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PessoasComponent } from './pessoas.component';
import { PessoasGuard } from '../guards/pessoa.guard';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';


const pessoasRoutes = [
    {path: '', component: PessoasComponent,
     canActivateChild: [PessoasGuard],
     children : [
        {path: 'novo', component: PessoasFormComponent},
        {path: ':id', component: PessoasDetalheComponent},
        {path: ':id/editar', component: PessoasFormComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(pessoasRoutes)],
    exports: [RouterModule]
})
export class PessoasRoutingModule {}
