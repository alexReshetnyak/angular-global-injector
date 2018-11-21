import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  protected getInfo() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
