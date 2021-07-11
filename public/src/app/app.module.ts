import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { ClientComponent } from './views/client/client.component';
import { AdminModule } from './views/admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './helpers/interceptor';
import { RoleGuardService } from './helpers/role.guards';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    HttpClientModule,
    FormsModule,                           
    ReactiveFormsModule,    
    AppRoutingModule,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    RoleGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
