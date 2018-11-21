import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

  public getServerInfo(): Observable<any> {
    return this.getInfo();
  }
}
