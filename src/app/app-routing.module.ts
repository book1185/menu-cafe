import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryPageComponent } from './menu-crud/category-page/category-page.component';
import { CrudMenuPageComponent } from './menu-crud/crud-menu-page/crud-menu-page.component';
import { MenuPageComponent } from './ui/menu-page/menu-page.component';
import { OrderStepOneComponent } from './ui/order-step-one/order-step-one.component';

const routes: Routes = [
  { path: '', component: OrderStepOneComponent },
  { path: 'category', component: MenuPageComponent },
  { path: 'crud-menu', component: CategoryPageComponent },
  { path: 'crud-category', component: CrudMenuPageComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
