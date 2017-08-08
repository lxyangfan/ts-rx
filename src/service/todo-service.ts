import { Observable, BehaviorSubject } from 'rxjs';
import { Todo } from './todo-model';
import { HttpClient } from '../network/http-client';

export class TodoService {

    private _todos: BehaviorSubject<Todo[]> = <BehaviorSubject<Todo[]>>new BehaviorSubject([]);
    private _dataStore: {
        todos: Todo[]
    } = { todos: [] };

    private _http: HttpClient;

    private static _instance: TodoService = null;

    public static getInstance(): TodoService {
        if (TodoService._instance === null) {
            TodoService._instance = new TodoService();
        }
        return TodoService._instance;
    }

    private constructor() { console.log("Service init"); }

    public loadAll(url: string) {

        this._http.get(url).subscribe( data => {
            this._dataStore.todos = data;
            // copy and new a Object for uni-direction
            // 使用复制的方式，确保单向数据流
            this._todos.next(Object.assign({}, this._dataStore).todos);
        });
    }

    get todos(): Observable<Todo[]> {
        return this._todos.asObservable();
    }

    public setHttp(httpClient: HttpClient) {
        this._http = httpClient;
    }

}