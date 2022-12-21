import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderStepOneComponent } from './ui/order-step-one/order-step-one.component';
import { NavigationBarComponent } from './core/navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuContainerComponent } from './core/menu-container/menu-container.component';
import { MenuPageComponent } from './ui/menu-page/menu-page.component';
import { MenuOrderPageComponent } from './core/menu-order-page/menu-order-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { CategoryPageComponent } from './menu-crud/category-page/category-page.component';
import { CrudMenuPageComponent } from './menu-crud/crud-menu-page/crud-menu-page.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    OrderStepOneComponent,
    NavigationBarComponent,
    MenuContainerComponent,
    MenuPageComponent,
    MenuOrderPageComponent,
    CategoryPageComponent,
    CrudMenuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // for firestore
    MatInputModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
