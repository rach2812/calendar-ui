import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/event';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-display-events',
  templateUrl: './display-events.component.html',
  styleUrls: ['./display-events.component.scss']
})
export class DisplayEventsComponent implements OnInit {
  
  public selectedDate: Date;
  public eventsList: Event[] = [];
  calendarOptions: CalendarOptions = {
    plugins: [
      dayGridPlugin,
      interactionPlugin
    ],
    initialView: 'dayGridMonth',
    weekends: false,
    selectable: true,
    select: this.handleDateClick.bind(this),
    events: this.eventsList
  }
  rawEvents: Event[] = [];

  constructor(private eventsService: EventsService, private fb: FormBuilder) {
    this.eventsService = eventsService;
    this.selectedDate = new Date();
  }

  ngOnInit(): void {
    this.getEvents();
  }

  handleDateClick(arg: DateSelectArg) {
    if (this.selectedDate.getDate() != arg.start.getDate()) {
      this.selectedDate = arg.start;
      this.getEvents();
    }
  }

  public getEvents() {
    this.clearEventsList();
    this.eventsService.getEvents(this.selectedDate).subscribe(resp => {
      this.mapEventsToList(resp);
    }, error => {
      alert(`Error getting events: ${error}`);
    });
  }

  public clearEventsList() {
    this.eventsList = [];
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
