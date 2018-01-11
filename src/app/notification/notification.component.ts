import { NotificationsService } from './../notifications.service';
import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from '../alert';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(public notifications: NotificationsService) { }

  ngOnInit() {
    this.notifications.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        // used to clear all alerts
        this.notifications.alerts = [];
        return;
      }
      // add alert to array
      this.notifications.alerts.push(alert);
    });
  }

  removeAlert(alert: Alert) {
    this.notifications.removeAlert(alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }
    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }

}
