import { Observable } from 'rxjs';
import { TodoService } from './service/todo-service';
import { NodeHttpClient } from './network/http-client-node-impl';

let service:TodoService = TodoService.getInstance();
let http:NodeHttpClient = new NodeHttpClient();
service.setHttp(http);

let url = "http://5987c69a2f50af001157524e.mockapi.io/api/v1/todos/";
service.loadAll(url);

let dataStore = service.todos;
dataStore.subscribe((data)=>{
    let item = data;
});
