export class Task {
    Name: string;
    Description: string;
    latitude : string;
    longitude : string;
    radius = 100;
    startTime: String;
    endTime: Date;

  constructor(){
    this.startTime = Date.now().toString();
    }
  }