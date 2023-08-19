import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }


  // Get all task
  getTasks(){
    return this.http.get<Itask[]>('http://localhost:3000/tasks');
  }

  //Create new task
  createTask(formData:any){
    return this.http.post<Itask>('http://localhost:3000/tasks', formData);
  }

  //Get a single Task 

  getTask(taskId: number){
    return this.http.get<Itask>(`http://localhost:3000/tasks/${taskId}`);
  }
  
  //update a task
  updateTask(formData:any, taskId: number){
    return this.http.put<Itask>(`http://localhost:3000/tasks/${taskId}`, formData);
  }

//Delete a task

deleteTask(taskId: number){
    return this.http.delete<Itask>(`http://localhost:3000/tasks/${taskId}`);
  }

}
