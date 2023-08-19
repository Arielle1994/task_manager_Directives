import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  taskForm:FormGroup;
  isEdit:boolean = false;
  editId: number= 0; 
  
  constructor(private fb: FormBuilder, private taskService:TasksService, private rooute:ActivatedRoute){
    this.taskForm= fb.group({
      title:['', [Validators.required]],
      description:['', [Validators.required]],
      category:['', [Validators.required]],
      task_date:['', [Validators.required]],
      priority_level:['', [Validators.required]],
      Progress_level:['', [Validators.required]],

    });

    //Get the task ID from URL

    let taskId= this.rooute.snapshot.paramMap.get('task_id');
   
    if(taskId !== null){
      //edit mode
      this.isEdit= true;
      this.editId= parseInt(taskId);

      //Get the data of the task to edit 

      this.taskService.getTask(this.editId).subscribe({
      next: (result) => {
        this.taskForm.patchValue(result); //populate web form with task data
      }
    });
  }
}

  onSubmit(){
    if(this.isEdit){
      this.editTask();
    } else{
      this.createTask();
    }
  }

  //create methods 
  createTask(){

    let formData = this.taskForm.value;
    this.taskService.createTask(formData).subscribe({
      next: (result) => {
        alert('Task was created successfully.');
        this.taskForm.reset(); //clear form data
      },

      error:(err) => {
        console.log(err);
        alert('something went wrong');
      }
    });
  }
 
  editTask(){
    let formData = this.taskForm.value;
    this.taskService.updateTask(formData, this.editId).subscribe({
      next: (result) => {
        alert('TTask was updated successfully.');
      },

      error:(err) => {
        console.log(err);
        alert('something went wrong');
      }
    });

  }
  ///task_date form Control
  get task_date(){
    return this.taskForm.get('task_date')!;
  }
}
