import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  public createEventForm: FormGroup;

  constructor(private eventsService: EventsService, private fb: FormBuilder) {
    this.eventsService = eventsService;

    this.createEventForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.createEventForm.valid) {
      this.eventsService.postEvent(this.constructEventPayload()).subscribe(resp => {
        alert('Successful event creation');
      }, error => {
        alert('Error creating event');
      });
    }
  }

  public isControlInvalid(control: AbstractControl) {
    return control && (control.touched || control.dirty) && control.invalid;
  }


  public constructEventPayload(): Event {
    return new Event(Number(this.createEventForm.get('id')?.value),
      this.createEventForm.get('title')?.value,
      this.createEventForm.get('location')?.value,
      this.createEventForm.get('description')?.value,
      this.createEventForm.get('startDate')?.value,
      this.createEventForm.get('endDate')?.value);
  }

}
