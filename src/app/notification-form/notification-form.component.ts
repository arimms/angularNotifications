import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from '../notifications.service';
import { AlertSettings } from './../alert';

@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css']
})
export class NotificationFormComponent implements OnInit {

  alertForm: FormGroup;
  position: any [] = [
    { name: 'Bottom right', class: 'bottom-right' }, { name: 'Bottom left', class: 'bottom-left'},
    { name: 'Top right', class: 'top-right' }, { name: 'Top left', class: 'top-left' }
  ];

  constructor(
    private fb: FormBuilder,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.alertForm = this.fb.group({
      message: ['', Validators.required ],
      timeout: ['', Validators.required ],
      position: ['', Validators.required ]
    });
  }

  success(settings: AlertSettings) {
    this.notifications.success(settings);
  }

  error(settings: AlertSettings) {
    this.notifications.error(settings);
  }

  info(settings: AlertSettings) {
    this.notifications.info(settings);
  }

  warn(settings: AlertSettings) {
    this.notifications.warn(settings);
  }

  clear() {
    this.notifications.clear();
  }

}
