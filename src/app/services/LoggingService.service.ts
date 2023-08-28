import { Loggable } from "./Loggable";

export class LoggingService implements Loggable {

    public log(payload: any): void {
        console.log(payload);
    }
    public logString(message: string): void {
        console.log(message);
    }
}