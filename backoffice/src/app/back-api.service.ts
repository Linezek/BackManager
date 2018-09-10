import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface NotificationData {
  badge?: Number,
  sound?: string,
  alert?: string,
  device?: string
}

export interface Update {
  version?: Number,
  url?: string,
  content?: string
}

@Injectable({
  providedIn: 'root'
})

export class BackAPIService {

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get(url)
  }

  postUpdate(update: Update) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:4000/api/update", update, httpOptions)
  }

  postNotification(note: NotificationData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:4000/api/notification", note, httpOptions)
  }
}
