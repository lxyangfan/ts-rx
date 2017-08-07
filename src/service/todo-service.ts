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

    public loadAll(url: string) {
        this._http.get(url).subscribe( data => {
            debugger;
            this._dataStore.todos = data;
            // copy and new a Object for uni-direction
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