"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var latLng_model_1 = require("../../@shared/viewModels/positionModel/latLng.model");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums"); // used to describe at what accuracy the location should be get
var router_1 = require("nativescript-angular/router");
var MapComponent = /** @class */ (function () {
    function MapComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.zoom = 8;
        this.minZoom = 0;
        this.maxZoom = 22;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
        this.geolocation = require("nativescript-geolocation");
        this.userLocation = new latLng_model_1.LatLng(0, 0);
    }
    MapComponent.prototype.ngOnInit = function () {
        this.geolocation.enableLocationRequest();
    };
    MapComponent.prototype.MarkLocation = function () {
        console.log("Marking Location");
        if (this.userMarker == null) {
            this.setMarker();
            this.mapView.zoom = 18;
        }
    };
    //Map events
    MapComponent.prototype.onMapReady = function (event) {
        var _this = this;
        console.log('Map Ready');
        this.mapView = event.object;
        console.log("getting current location");
        geolocation.getCurrentLocation({ desiredAccuracy: enums_1.Accuracy.high, maximumAge: 5000, timeout: 10000 })
            .then(function (location) {
            _this.mapView.latitude = location.latitude,
                _this.mapView.longitude = location.longitude,
                _this.userLocation.lat = location.latitude,
                _this.userLocation.lng = location.longitude;
        });
        console.log("removing old marker");
        this.mapView.removeMarker(this.userMarker);
        console.log("here");
        this.MarkLocation();
    };
    MapComponent.prototype.setMarker = function () {
        console.log("Setting a marker...");
        this.userMarker = new nativescript_google_maps_sdk_1.Marker();
        this.userMarker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(this.mapView.latitude, this.mapView.longitude);
        this.userMarker.userData = { index: 1 };
        this.mapView.addMarker(this.userMarker);
    };
    MapComponent.prototype.onCoordinateTapped = function (args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    MapComponent.prototype.onMarkerEvent = function (args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    MapComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.mapView.zoom = 11;
        this.lastCamera = JSON.stringify(args.camera);
    };
    MapComponent.prototype.onCameraMove = function (args) {
        console.log("Camera moving: " + JSON.stringify(args.camera));
    };
    MapComponent.prototype.goBeck = function () {
        this.routerExtensions.navigate(["../new-task"], { queryParams: { lat: this.userLocation.lat, lng: this.userLocation.lng } });
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsNkVBQXlFO0FBSXpFLG9GQUE2RTtBQUM3RSxzREFBd0Q7QUFDeEQsa0NBQW9DLENBQUMsK0RBQStEO0FBQ3BHLHNEQUErRDtBQU8vRDtJQWtCRSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFmdEQsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQVEzQixnQkFBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBR2hELElBQUksQ0FBQyxZQUFZLEdBQUUsSUFBSSxxQkFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUYsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtJQUMxQyxDQUFDO0lBR0MsbUNBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztRQUUzQixDQUFDO0lBQ0csQ0FBQztJQUdKLFlBQVk7SUFDWixpQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUFoQixp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QUFJO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFHRCw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBQyxFQUFDLENBQUMsQ0FBQztJQUU1SCxDQUFDO0lBMUZZLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7eUNBbUJzQyx5QkFBZ0I7T0FsQjNDLFlBQVksQ0EyRnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTNGRCxJQTJGQztBQTNGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcblxuLy9pbXBvcnQgb2YgdGhlIGdlbyBsb2NhdGlvblxuaW1wb3J0IHsgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIGdldEN1cnJlbnRMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbiwgZGlzdGFuY2UsIGNsZWFyV2F0Y2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBMYXRMbmcgfSBmcm9tIFwiLi4vLi4vQHNoYXJlZC92aWV3TW9kZWxzL3Bvc2l0aW9uTW9kZWwvbGF0TG5nLm1vZGVsXCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiOyAvLyB1c2VkIHRvIGRlc2NyaWJlIGF0IHdoYXQgYWNjdXJhY3kgdGhlIGxvY2F0aW9uIHNob3VsZCBiZSBnZXRcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW1hcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxhdCA6IGFueSA7XG4gIGxuZyA6IGFueSA7XG4gIHpvb20gPSA4O1xuICBtaW5ab29tID0gMDtcbiAgbWF4Wm9vbSA9IDIyO1xuICBiZWFyaW5nID0gMDtcbiAgdGlsdCA9IDA7XG4gIHBhZGRpbmcgPSBbNDAsIDQwLCA0MCwgNDBdO1xuICBtYXBWaWV3OiBNYXBWaWV3O1xuICBsYXN0Q2FtZXJhOiBTdHJpbmc7XG5cblxuXG4gIHVzZXJMb2NhdGlvbjogTGF0TG5nO1xuICB1c2VyTWFya2VyOiBNYXJrZXI7XG4gIGdlb2xvY2F0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiKTtcbiAgYmdHZW8gO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMgKXsgXG4gICAgdGhpcy51c2VyTG9jYXRpb249IG5ldyBMYXRMbmcoMCwwKTtcbiAgIH1cblxuICBuZ09uSW5pdCgpIHsgIFxuICAgIHRoaXMuZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KClcbiAgfVxuIFxuXG4gICAgTWFya0xvY2F0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJNYXJraW5nIExvY2F0aW9uXCIpO1xuICAgICAgaWYodGhpcy51c2VyTWFya2VyPT1udWxsKXtcbiAgICAgICAgdGhpcy5zZXRNYXJrZXIoKTtcbiAgICAgICAgdGhpcy5tYXBWaWV3Lnpvb209MTg7XG5cbiAgfVxuICAgICAgfVxuXG4gICAgICBcbiAgIC8vTWFwIGV2ZW50c1xuICAgb25NYXBSZWFkeShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdNYXAgUmVhZHknKTtcbiAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XG4gICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGN1cnJlbnQgbG9jYXRpb25cIik7XG4gICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCBtYXhpbXVtQWdlOiA1MDAwLCB0aW1lb3V0OiAxMDAwMCB9KVxuICAgIC50aGVuKGxvY2F0aW9uID0+e1xuICAgICAgdGhpcy5tYXBWaWV3LmxhdGl0dWRlPWxvY2F0aW9uLmxhdGl0dWRlLFxuICAgICAgdGhpcy5tYXBWaWV3LmxvbmdpdHVkZT0gbG9jYXRpb24ubG9uZ2l0dWRlLFxuICAgICAgdGhpcy51c2VyTG9jYXRpb24ubGF0PWxvY2F0aW9uLmxhdGl0dWRlLFxuICAgICAgdGhpcy51c2VyTG9jYXRpb24ubG5nPWxvY2F0aW9uLmxvbmdpdHVkZVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwicmVtb3Zpbmcgb2xkIG1hcmtlclwiKTtcbiAgICB0aGlzLm1hcFZpZXcucmVtb3ZlTWFya2VyKHRoaXMudXNlck1hcmtlcik7XG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xuICAgIHRoaXMuTWFya0xvY2F0aW9uKCk7XG4gIH1cblxuICBzZXRNYXJrZXIoKXtcbiAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgYSBtYXJrZXIuLi5cIik7XG4gICAgdGhpcy51c2VyTWFya2VyID0gbmV3IE1hcmtlcigpO1xuICAgIHRoaXMudXNlck1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyh0aGlzLm1hcFZpZXcubGF0aXR1ZGUsIHRoaXMubWFwVmlldy5sb25naXR1ZGUpO1xuICAgIHRoaXMudXNlck1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XG4gICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcih0aGlzLnVzZXJNYXJrZXIpO1xuICAgIH1cbiAgICBcblxuXG5vbkNvb3JkaW5hdGVUYXBwZWQoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZSBUYXBwZWQsIExhdDogXCIgKyBhcmdzLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZSwgYXJncyk7XG59XG5cbm9uTWFya2VyRXZlbnQoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwiTWFya2VyIEV2ZW50OiAnXCIgKyBhcmdzLmV2ZW50TmFtZVxuICAgICAgICArIFwiJyB0cmlnZ2VyZWQgb246IFwiICsgYXJncy5tYXJrZXIudGl0bGVcbiAgICAgICAgKyBcIiwgTGF0OiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xufVxuXG5vbkNhbWVyYUNoYW5nZWQoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIGNoYW5nZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpLCBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSkgPT09IHRoaXMubGFzdENhbWVyYSk7XG4gICAgdGhpcy5tYXBWaWV3Lnpvb209MTE7XG4gICAgdGhpcy5sYXN0Q2FtZXJhID0gSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpO1xuICBcbn1cblxub25DYW1lcmFNb3ZlKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBtb3Zpbmc6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpKTtcbn1cblxuXG5nb0JlY2soKXtcbiAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi4uL25ldy10YXNrXCJdLCB7cXVlcnlQYXJhbXM6IHtsYXQ6IHRoaXMudXNlckxvY2F0aW9uLmxhdCAsIGxuZzogdGhpcy51c2VyTG9jYXRpb24ubG5nfX0pO1xuICBcbn1cbn1cbiJdfQ==