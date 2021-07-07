import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from './template/templates.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsAdminModule } from './components/component.admin.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsAdminModule,
    TemplateModule,
    ReactiveFormsModule
  ],
  exports : [
    AdminComponent
  ]
})
export class AdminModule { }
