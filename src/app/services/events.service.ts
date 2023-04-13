import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  public getEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(AppSettings.EVENTS_URL);
    }

    public postEvent(eventReq: Event): Observable<any> {
      return this.httpClient.post<Event>(AppSettings.EVENTS_URL, eventReq);
    }
}
