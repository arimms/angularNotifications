export class Alert {
    type: AlertType;
    message: string;
    autoClose: boolean;
}

export class AlertSettings {
    message: string;
    timeout: number;
    position: string;
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
