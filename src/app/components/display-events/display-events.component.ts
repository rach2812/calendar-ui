import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/event'

@Component({
  selector: 'app-display-events',
  templateUrl: './display-events.component.html',
  styleUrls: ['./display-events.component.scss']
})
export class DisplayEventsComponent {
  
  public selectedDate: Date;
  public eventsList: Event[] = [];

  constructor(private eventsService: EventsService, private fb: FormBuilder) {
    this.eventsService = eventsService;

    this.selectedDate = new Date();
  }

  public getEvents() {
    this.eventsService.getEvents(this.selectedDate).subscribe(resp => {
      this.mapEventsToList(resp);
      
      console.log(resp);
    }, error => {
      alert(`Error getting event: ${error}`);
    });
  }

  public mapEventsToList(allEvents: any[]) {
    allEvents.forEach(event => {
      const e = new Event(
        event.title, event.location, event.description, new Date(event.startDate), new Date(event.endDate)
      );
      this.eventsList.push(e);
    });
  }
}
