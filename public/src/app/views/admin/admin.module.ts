import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from './template/templates.module';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { PersonComponent } from './components/person/person.component';
import { PlanComponent } from './components/plan/plan.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    StoreComponent,
    PersonComponent,
    PlanComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplateModule,
    ReactiveFormsModule
  ],
  exports : [
    AdminComponent
  ]
})
export class AdminModule { }
