import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	    {path: 'admin', loadChildren: './admin-layout/admin-layout.module#AdminLayoutModule'},
       { path: '', redirectTo: 'admin', pathMatch:'full' },
  // { path: 'User', component: UserComponent },
  // { path: 'SellGems', component: SellGemsComponent },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
