import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: TaskComponent,
  },
  {
    path: 'addTask',
    component: AddTaskComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path:'**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
