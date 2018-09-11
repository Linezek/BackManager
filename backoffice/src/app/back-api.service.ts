import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface NotificationData {
  badge?: Number,
  sound?: string,
  alert?: string,
  device?: string
}

export interface Update {
  version?: string,
  url?: string,
  content?: string
}

@Injectable({
  providedIn: 'root'
})

export class BackAPIService {

  constructor(private http: HttpClient) { }
  url: string = "http://192.168.1.49:4000/api"
  //url: string = "http://90.127.80.59:4000/api"
  //url: string = "http://localhost:4000/api"
  getData(url: string) {
    return this.http.get(this.url + url)
  }

  postUpdate(update: Update) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(this.url + "/update", update, httpOptions)
  }

  postNotification(note: NotificationData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(this.url + "/notification", note, httpOptions)
  }
}
