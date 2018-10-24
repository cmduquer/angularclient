import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatmessageService {

  public API = '//localhost:9000';
  public CAR_API = this.API + '/chats';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    console.log(this.CAR_API);
    console.log(this.http.get(this.CAR_API));
    return this.http.get(this.CAR_API);
  }

  get(id: string) {
    return this.http.get(this.API + '/chatMessage' + id);
  }
}
