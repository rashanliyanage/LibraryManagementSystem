import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AdminLayoutRoutingModule} from './admin-layout.routing.module';
import {AdminLayoutComponent} from './admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import {SideBarComponent} from './side-bar/side-bar.component';
import  {NavBarComponent} from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {NeItemComponent} from './components/ne-item/ne-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
			CommonModule, AdminLayoutRoutingModule,RouterModule,HttpClientModule,FormsModule
    ],
    declarations: [
      AdminLayoutComponent,
      DashboardComponent,
      SideBarComponent,
      NavBarComponent,
      NeItemComponent
		]
})
export class AdminLayoutModule {}
