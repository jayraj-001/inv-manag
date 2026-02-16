import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProductComponent } from './features/product/product.component';
import { CategoryComponent } from './features/category/category.component';
import { CustomerComponent } from './features/customer/customer.component';
import { SupplierComponent } from './features/supplier/supplier.component';
import { SalesComponent } from './features/sales/sales.component';
import { UsersComponent } from './features/users/users.component';
import { ReportsComponent } from './features/reports/reports.component';

import { roleGuard } from './core/guards/role.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'suppliers',
    component: SupplierComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },

  {
    path: 'users',
    component: UsersComponent,
    canActivate: [roleGuard]  
  },

  {
    path: 'reports',
    component: ReportsComponent
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
