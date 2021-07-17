import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardService } from './helpers/role.guards';
import { AdminComponent } from './views/admin/admin.component';
import { MainComponent } from './views/admin/components/main/main.component';
import { ManageCouponPersonComponent } from './views/admin/components/manage-coupon-person/manage-coupon-person.component';
import { ManagePersonComponent } from './views/admin/components/manage-person/manage-person.component';
import { ManagePlanComponent } from './views/admin/components/manage-plan/manage-plan.component';
import { ManageProductoComponent } from './views/admin/components/manage-producto/manage-producto.component';
import { ManageStoreComponent } from './views/admin/components/manage-store/manage-store.component';
import { PersonComponent } from './views/admin/components/person/person.component';
import { PlanComponent } from './views/admin/components/plan/plan.component';
import { ProductComponent } from './views/admin/components/product/product.component';
import { StoreComponent } from './views/admin/components/store/store.component';
import { ClientComponent } from './views/client/client.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path : 'factory' , component : ClientComponent},
  { path : 'login' , component : LoginComponent },
  { path: 'admin', component : AdminComponent , data : { title : 'Menu Principal' } , canActivate:[RoleGuardService] , children :[
    { path : 'main' , component : MainComponent , data : { title : 'Menu Principal' }},
    { path : 'person' , component : PersonComponent , data : { title : 'Administrar Personas' } },
    { path : 'person/:idPerson' , component : ManagePersonComponent , data : { title : 'Gestionar Personas' } }, 
    { path : 'person/coupon/:idPerson' , component : ManageCouponPersonComponent , data : { title : 'Lista de cupones Personas' } },
    { path : 'store' , component : StoreComponent ,  data : { title : 'Administrar Tiendas' }},
    { path : 'store/:idStore' , component : ManageStoreComponent ,  data : { title : 'Gestionar Tienda' }},
    { path : 'product/:idStore' , component : ProductComponent , data : { title : 'Lista de Productos' } },
    { path : 'product/:idStore/:idProducto' , component : ManageProductoComponent , data : { title : 'Gestionar Productos' } },
    { path : 'plan' , component : PlanComponent ,  data : { title : 'Administrar Planes' }},
    { path : 'plan/:idPlan' , component : ManagePlanComponent , data : { title : 'Administrar Planes' } },
  ] },
  { path: '**' , component : LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
