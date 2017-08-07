import { Observable } from 'rxjs';

export interface HttpClient {
    get(url: string): Observable<any>;
}


