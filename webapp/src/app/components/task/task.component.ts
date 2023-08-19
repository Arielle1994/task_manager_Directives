import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input()task!:Itask;
  @Output() deleteEvent= new EventEmitter();
  deleteAction(){
    this.deleteEvent.emit(this.task.id);
  }
}
