import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Task } from './task';

@Injectable()

// Service for products data.
export class TaskService {

  // We need Http to talk to a remote server.
  constructor(private _http: Http) { }

  // Get list of products from remote server.
  readTasks(): Observable<Task[]> {
    //this.headers.append("Access-Control-Allow-Origin","*");
    return this._http
      .get("http://localhost:3000/tasks").map(res => res.json());
  }

  // Send product data to remote server to create it.
createTask(task): Observable<Task>{
 
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });

  return this._http.post(
      "http://localhost:3000/tasks",
      task,
      options
  ).map(res => res.json());
}

}
