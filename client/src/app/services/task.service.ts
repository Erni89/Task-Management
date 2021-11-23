import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(public http: HttpClient, public router: Router) {}

  public url: string = 'http://localhost:3001/task';

  public getAllTask() {
    return this.http.get(this.url);
  }
  public addNewTask(data: Task) {
    console.log(data);
    return this.http.post(this.url, data, {
      headers: { 'content-type': 'application/json' },
    });
  }
  public compliedTask(data: { id: string; completed: boolean }) {
    return this.http.put(this.url, data, {
      headers: { 'content-type': 'application/json' },
    });
  }
}
