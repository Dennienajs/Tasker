import { Injectable } from '@angular/core';
import { Task } from "../Task";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const apiUrl = 'http://localhost:3000/tasks';
const apiUrlId = (task: Task) => `${apiUrl}/${task.id!}`

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  getTasks = (): Observable<Task[]> =>
    this.httpClient.get<Task[]>(apiUrl);

  deleteTask = (task: Task): Observable<Task> =>
    this.httpClient.delete<Task>(apiUrlId(task));

  updateTask = (task: Task) =>
    this.httpClient.put<Task>(apiUrlId(task), task, httpOptions);

}
