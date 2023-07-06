import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/event';


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
  //   this.eventsService.getEvents().subscribe(resp => {
  //     this.rawEvents = resp;
  //     console.log(this.rawEvents);
  //   });
  }

}
