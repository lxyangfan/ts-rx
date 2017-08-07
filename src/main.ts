import { Observable } from 'rxjs';
import { TodoService } from './service/todo-service';
import { NodeHttpClient } from './network/http-client-node-impl';

// singleton
const service: TodoService = TodoService.getInstance();

const http: NodeHttpClient = new NodeHttpClient();
service.setHttp(http);  // 依赖注入 dependency injection

const url = "http://5987c69a2f50af001157524e.mockapi.io/api/v1/todos/";
service.loadAll(url);

const dataStore = service.todos;
dataStore.subscribe(data => {
    console.log("收到数据 :)");
    const item = data;
    console.log(item);
});
