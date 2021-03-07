import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarListComponent } from './dashboard/car-list/car-list.component';
import { AddEditCarComponent } from './dashboard/add-edit-car/add-edit-car.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent },
  
  { path: 'dashboard', component: DashboardComponent},
    
    { path: 'car-list', component: CarListComponent },
    
  { path: 'editCar/:id', component: AddEditCarComponent },
    {path:'add-edit-car', component: AddEditCarComponent},
   
    

  { path: '**', redirectTo: 'layout', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
