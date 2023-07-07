import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEventsComponent } from './components/display-events/display-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

const routes: Routes = [
  { path: 'events', component: DisplayEventsComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full'},
  { path: '**', redirectTo: 'events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
