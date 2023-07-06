import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  public getEvents(selectedDate: Date): Observable<Event[]> {
    let params = new HttpParams().set("selectedDate",selectedDate.toDateString());
    return this.httpClient.get<Event[]>(AppSettings.EVENTS_URL, { params: params });
  }

  public postEvent(eventReq: Event): Observable<any> {
    return this.httpClient.post<Event>(AppSettings.EVENTS_URL, eventReq);
  }
}
