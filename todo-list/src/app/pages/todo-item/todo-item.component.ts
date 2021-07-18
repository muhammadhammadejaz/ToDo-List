import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../core/models/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo_item : Todo ;
  @Output() todo_delete : EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo_item)
  }

  onCLick(todo_item : Todo)
  {
    this.todo_delete.emit(todo_item);
    console.log("Button triggered");
  }

}
