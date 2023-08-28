export interface Loggable {
    
    log(payload: any): void;
    logString(payload: string): void;
}