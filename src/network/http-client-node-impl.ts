import { HttpClient } from './http-client';
import { Observable, BehaviorSubject } from 'rxjs';
import * as request from 'request';

export class NodeHttpClient implements HttpClient {

    get(url: string): Observable<any> {
        const retObj = new BehaviorSubject({});
        request.get(url, null, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                retObj.next(JSON.parse(body));
            }
        });
        return retObj.asObservable();
    }

}