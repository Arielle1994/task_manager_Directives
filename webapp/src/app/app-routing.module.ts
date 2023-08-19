import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'tasks', component:TasksComponent},
  {path:'create-task', component:TaskFormComponent},
  {path:'edit-task/:task_id', component:TaskFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
