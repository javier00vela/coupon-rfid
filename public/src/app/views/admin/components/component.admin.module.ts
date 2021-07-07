import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/component.module';
import { MainComponent } from './main/main.component';
import { PersonComponent } from './person/person.component';
import { PlanComponent } from './plan/plan.component';
import { StoreComponent } from './store/store.component';
import { ManagePersonComponent } from './manage-person/manage-person.component';
import { ManageProductoComponent } from './manage-producto/manage-producto.component';
import { ProductComponent } from './product/product.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { RouterModule } from '@angular/router';
import { ManageStoreComponent } from './manage-store/manage-store.component';
import { ManageCouponPersonComponent } from './manage-coupon-person/manage-coupon-person.component';
@NgModule({
  declarations: [
    StoreComponent,
    PersonComponent,
    PlanComponent,
    MainComponent,
    ManagePersonComponent,
    ManageProductoComponent,
    ProductComponent,
    ManagePlanComponent,
    ManageStoreComponent,
    ManageCouponPersonComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    StoreComponent,
    PersonComponent,
    PlanComponent,
    MainComponent,
    ManagePersonComponent,
    ManageProductoComponent,
    ProductComponent,
    ManagePlanComponent
  ]
})
export class ComponentsAdminModule { }
