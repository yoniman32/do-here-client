import { Component, OnInit, Output } from '@angular/core';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

//import of the geo location
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { LatLng } from "../../@shared/viewModels/positionModel/latLng.model";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums"; // used to describe at what accuracy the location should be get
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat : any ;
  lng : any ;
  zoom = 8;
  minZoom = 0;
  maxZoom = 22;
  bearing = 0;
  tilt = 0;
  padding = [40, 40, 40, 40];
  mapView: MapView;
  lastCamera: String;



  userLocation: LatLng;
  userMarker: Marker;
  geolocation = require("nativescript-geolocation");
  bgGeo ;
  constructor(private routerExtensions: RouterExtensions ){ 
    this.userLocation= new LatLng(0,0);
   }

  ngOnInit() {  
  }
 

    MarkLocation() {
      console.log("Marking Location");
      if(this.userMarker==null){
        this.setMarker();
        this.mapView.zoom=18;

  }
      }

      
   //Map events
   onMapReady(event) {
    this.geolocation.enableLocationRequest()
    console.log('Map Ready');
    this.mapView = event.object;
    console.log("getting current location");
    geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 10000 })
    .then(location =>{
      this.mapView.latitude=location.latitude,
      this.mapView.longitude= location.longitude,
      this.userLocation.lat=location.latitude,
      this.userLocation.lng=location.longitude
    });
    console.log("removing old marker");
    this.mapView.removeMarker(this.userMarker);
    console.log("here");
    this.MarkLocation();
  }

  setMarker(){
    console.log("Setting a marker...");
    this.userMarker = new Marker();
    this.userMarker.position = Position.positionFromLatLng(this.mapView.latitude, this.mapView.longitude);
    this.userMarker.userData = {index: 1};
    this.mapView.addMarker(this.userMarker);
    }
    


onCoordinateTapped(args) {
    console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
}

onMarkerEvent(args) {
    console.log("Marker Event: '" + args.eventName
        + "' triggered on: " + args.marker.title
        + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
}

onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
    this.mapView.zoom=11;
    this.lastCamera = JSON.stringify(args.camera);
  
}

onCameraMove(args) {
    console.log("Camera moving: " + JSON.stringify(args.camera));
}


goBeck(){
  this.routerExtensions.navigate(["../new-task"], {queryParams: {lat: this.userLocation.lat , lng: this.userLocation.lng}});
  
}
}
