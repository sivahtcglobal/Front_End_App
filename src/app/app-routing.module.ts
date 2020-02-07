import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {HomeComponent} from "./home/home.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDisplayComponent} from "./employee-display/employee-display.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'employeeDetails', component: EmployeeComponent},
  {path: 'search', component: EmployeeListComponent},
  { path: 'reload',   redirectTo: '', pathMatch: 'prefix' },
  {path: 'view', component: EmployeeDisplayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
