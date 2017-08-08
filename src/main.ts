import { Observable, Subject, Subscription } from 'rxjs';
import { TodoService } from './service/todo-service';
import { NodeHttpClient } from './network/http-client-node-impl';

// singleton
const service: TodoService = TodoService.getInstance();

const http: NodeHttpClient = new NodeHttpClient();
service.setHttp(http);  // 依赖注入 dependency injection

const url = "http://5987c69a2f50af001157524e.mockapi.io/api/v1/todos/";
service.loadAll(url);

const dataStore$ = service.todos;

dataStore$.subscribe(
    data    => { console.log(`************************\nc${data}<< 发送信号了 >>`);},
    er  => {},
    ()  => { console.log("cleanSubject<< complete\n************************\n");}
);


/**
 * 测试1： 使用Subject管理
 */
// const cleanSubject$: Subject<any> = new Subject();
// const dataSubscription: Subscription = dataStore$.takeUntil(cleanSubject$).subscribe(
//     data => {
//         console.log("-----------------------\nSubscription->收到数据:)");
//         console.log(data);
//     }, err => {
//         console.log("出错error!!");
//     }, () => {
//         console.log("Subscription->结束complete!!");
//         console.log("-----------------------\n");
//     }
// );

// cleanSubject$.subscribe( 
//     data    => { console.log("************************\ncleanSubject<< 发送信号了 >>");},
//     er  => {},
//     ()  => { console.log("cleanSubject<< complete\n************************\n");}
// );

// setTimeout(() => {
//     // 发送消息让takeUntil条件成立，结束其他的流
//     cleanSubject$.next();
//     // 结束订阅自己的observer
//     cleanSubject$.complete();
// }, 2000);


/**
 * 测试2： Subscribe和 unSubscribe
 */

// const observable2: Observable<any> = Observable.interval(200); 

// const sub:Subscription = observable2.subscribe(
//     data    => { console.log("************************\nobservable2<< 发送信号了 >>\n************************\n");},
//     er  => {},
//     ()  => { console.log("observable2<< complete\n************************\n");}
// );

// setTimeout(()=>{
//     sub.unsubscribe();
// }, 1000);


/**
 * 测试3： 使用Subject来结束
 */

// const observable3: Observable<any> = Observable.interval(200); 

// const cleanUp: Subject<any> = new Subject();
// const sub2:Subscription = observable3.takeUntil(cleanUp).subscribe(
//     data    => { console.log("************************\nobservable2<< 发送信号了 >>\n************************\n");},
//     er  => {},
//     ()  => { console.log("observable2<< complete\n************************\n");}
// );

// setTimeout(()=>{
//     cleanUp.next();
//     cleanUp.complete();
// }, 1000);


/**
 * 测试4： 使用Subject来结束
 */

// const observable4: Observable<any> = Observable.of([1]);

//  observable4.subscribe(
//     data    => { console.log(`************************\nobservable4<< 发送信号了 -> ${data} >>\n************************\n`);},
//     er  => {},
//     ()  => { console.log("observable2<< complete\n************************\n");}
// );