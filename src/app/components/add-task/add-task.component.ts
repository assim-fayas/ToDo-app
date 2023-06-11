import { Component,Output,EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import {Task} from '../../Task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask:EventEmitter<Task>=new EventEmitter()
text!:string;
day!:string;
reminder:boolean=false;

constructor(private uiService:UiService){}

onSubmit(){
  if(!this.text){
    alert('Please add a task');
    return;
  }
  const newTask={
    text:this.text,
    day:this.day,
    reminder:this.reminder
  }

 this.onAddTask.emit(newTask);

  this.text='';
  this.day='';
  this.reminder=false;
}
}
