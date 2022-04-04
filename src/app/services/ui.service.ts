import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private isShowingAddTask = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask = () => {
    this.isShowingAddTask = !this.isShowingAddTask;
    this.subject.next(this.isShowingAddTask);
    console.log("toggleAddTask()");
  }

  onToggle = (): Observable<any> => this.subject.asObservable();
}
