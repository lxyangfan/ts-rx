import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';
import { Todo } from './todo.model';

import { Observable, Subject } from 'rxjs/Rx';


@Injectable()
export class TodoService {

  private _todoStore: {todos: Todo[]}  = {todos: []} ;

  private _todoSubject$: Subject<Todo[]>;

  constructor(private _http: Http) {
    this._todoSubject$ = new Subject<Todo[]>();
  }

  loadAll() {
    this._http.get(`http://5987c69a2f50af001157524e.mockapi.io/api/v1/todos`)
      .map(ret => ret.json())
      .subscribe(
      data => {
        if (data) {
          this._todoStore = {todos: data} ;
          this._todoSubject$.next(Object.assign({}, this._todoStore).todos);
        }
      },
      err => {
        throw new Error('网络请求错误！');
      });
  }

  get todos(): Observable<Todo[]> {
    return this._todoSubject$.asObservable();
  }

}
