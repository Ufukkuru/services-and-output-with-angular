import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
 work:string=""
 @Output() addEvent = new EventEmitter<string>

 add(){
  this.addEvent.emit(this.work)
  this.work = ""
 }
}
