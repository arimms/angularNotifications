import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotificationsService } from './notifications.service';
import { NotificationComponent } from './notification/notification.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    NotificationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ NotificationsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
