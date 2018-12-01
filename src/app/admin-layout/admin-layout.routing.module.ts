// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './admin-layout.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NeItemComponent} from './components/ne-item/ne-item.component'


const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
             { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
             { path: 'dashboard', component: DashboardComponent},
             { path: 'newItem', component: NeItemComponent}



        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule {}
