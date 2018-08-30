export class Task {
    Name: string;
    Description: string;
    Latitude : number;
    Longitude : number;
    Radius :  number;
    Created  : Date ;
    LastUpdate: Date;
    StartTime : Date;
    
  constructor(){
    this.Created= new Date();
    this.LastUpdate= new Date();
    this.Radius=99;
  }
  }