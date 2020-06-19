import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications : Array<string> = new Array();
  behavior : Subject<Array<string>>;
  public readonly notifications$ : Observable<Array<string>>;

  constructor() { 
    this.behavior = new BehaviorSubject(this.notifications);
    this.notifications$ = this.behavior.asObservable();
  }

  getNotifications() : Observable<Array<string>> {
    return this.notifications$;
  }

  addNotification(msg : string){
    
    this.notifications.push(msg)
    this.behavior.next(this.notifications);

  }
}
