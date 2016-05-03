import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()

export class TestService {
    
    constructor(private http: Http) {}
    
    getnames() {
        return this.http.get('someurl');
    }
}