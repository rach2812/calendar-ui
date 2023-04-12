import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: []
  }
  rawEvents: Event[] = [];

  constructor(private changeDetector: ChangeDetectorRef, 
    private eventsService: EventsService){
      this.eventsService = eventsService;

  }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(e => {
      this.rawEvents.concat(e);
      console.log(this.rawEvents);
    });
  }

  getEvents(events: []) {
    // this.events = events;
    this.changeDetector.detectChanges;
  }

}
