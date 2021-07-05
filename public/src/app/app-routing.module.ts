import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { MainComponent } from './views/admin/components/main/main.component';
import { PersonComponent } from './views/admin/components/person/person.component';
import { PlanComponent } from './views/admin/components/plan/plan.component';
import { StoreComponent } from './views/admin/components/store/store.component';
import { ClientComponent } from './views/client/client.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path : '' , component : ClientComponent},
  { path : 'login' , component : LoginComponent},
  { path: 'admin', component : AdminComponent , data : { title : 'Menu Principal' } , children :[
    { path : 'main' , component : MainComponent , data : { title : 'Menu Principal' }},
    { path : 'person' , component : PersonComponent , data : { title : 'Administrar Personas' } },
    { path : 'store' , component : StoreComponent ,  data : { title : 'Administrar Tiendas' }},
    { path : 'plan' , component : PlanComponent ,  data : { title : 'Administrar Planes' }}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
