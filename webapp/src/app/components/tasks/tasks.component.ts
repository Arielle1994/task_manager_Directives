import { Component, Input } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
 tasks!:Itask[];

 constructor(private taskService: TasksService){
  taskService.getTasks().subscribe({
    next:(results) => {
      this.tasks= results;
    },
    error:(err) => {
      console.log(err);
      alert('something went wrong.');
    }
    });

    }
    deleteTask(taskId: number){
      //delete the task from the visual (browser)
      let index = this.tasks.findIndex((item) => {

        return item.id === taskId;
  
      });
  
   
      this.tasks.splice(index, 1);
      //delete this task

      this.taskService.deleteTask(taskId).subscribe({

        next: (result) => {
  
          alert('Task was deleted successfully');
  
        }
  
      });
    }
  }
