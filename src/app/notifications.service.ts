import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Alert, AlertType, AlertSettings } from './alert';

@Injectable()
export class NotificationsService {

  private subject = new Subject<Alert>();
  position: string;
  alerts: Alert[] = [];

  constructor() {}

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }
  getAlert(): Observable<any> {
      return this.subject.asObservable();
  }

  success(settings: AlertSettings) {
    this.alert(AlertType.Success, this.checkSettings(settings));
  }

  error(settings: AlertSettings) {
    this.alert(AlertType.Error, this.checkSettings(settings));
  }

  info(settings: AlertSettings) {
    this.alert(AlertType.Info, this.checkSettings(settings));
  }

  warn(settings: AlertSettings) {
    this.alert(AlertType.Warning, this.checkSettings(settings));
  }

  alert(type: AlertType, settings: AlertSettings) {
    this.position = settings.position;
    const autoClose = settings.timeout > 0 ? true : false;
    const alert = <Alert>{ type: type, message: settings.message, autoClose: autoClose };
    this.subject.next(alert);
    if ( settings.timeout > 0 ) {
      setTimeout(() => {
          this.removeAlert(alert);
      }, settings.timeout);
    }
  }

  clear() {
    this.subject.next();
  }

  checkSettings(settings: AlertSettings): AlertSettings {
    if (settings.message === '') {
      settings.message = 'This is the default message';
    }
    if (settings.position === '') {
      settings.position = 'bottom-right';
    }
    return settings;
  }

}
