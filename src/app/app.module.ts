import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { ConfirmationModalComponent } from './shared/components/confirmation-modal/confirmation-modal.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CategoryComponent } from './features/category/category.component';
import { ProductComponent } from './features/product/product.component';
import { CustomerComponent } from './features/customer/customer.component';
import { SupplierComponent } from './features/supplier/supplier.component';
import { SalesComponent } from './features/sales/sales.component';
import { UsersComponent } from './features/users/users.component';
import { ReportsComponent } from './features/reports/reports.component';


providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    LayoutComponent,
    ConfirmationModalComponent,
    DashboardComponent,
    CategoryComponent,
    
    CustomerComponent,
    SupplierComponent,
    SalesComponent,
    UsersComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent,
    ProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
