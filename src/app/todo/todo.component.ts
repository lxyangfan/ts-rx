import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { Observable } from 'rxjs/Rx';
import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private _todo$: Observable<Todo[]>;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.loadAll();
    this._todo$ = this._todoService.todos;
  }

}
