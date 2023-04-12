import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  public getEvents(): Observable<Event[]> {
    let result;
    this.httpClient.get<Event[]>(AppSettings.EVENTS_URL).subscribe(e => {
      result = e;
    });
    return new Observable<Event[]>(result);
    }
}
