import { Observable } from 'rxjs';

let observerble: Observable<number> = Observable.from([1, 2, 3]);


observerble.subscribe(
    (item: number) => {
        console.log("处理了" + item);
    },
    () => {

    },
    () => {
        console.log("结束啦！！");
    }
);

