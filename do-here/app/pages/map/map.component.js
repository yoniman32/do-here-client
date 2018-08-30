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
        this.geolocation.enableLocationRequest();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsNkVBQXlFO0FBSXpFLG9GQUE2RTtBQUM3RSxzREFBd0Q7QUFDeEQsa0NBQW9DLENBQUMsK0RBQStEO0FBQ3BHLHNEQUErRDtBQU8vRDtJQWtCRSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFmdEQsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQVEzQixnQkFBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBR2hELElBQUksQ0FBQyxZQUFZLEdBQUUsSUFBSSxxQkFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUYsK0JBQVEsR0FBUjtJQUNBLENBQUM7SUFHQyxtQ0FBWSxHQUFaO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO1FBRTNCLENBQUM7SUFDRyxDQUFDO0lBR0osWUFBWTtJQUNaLGlDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQWdCQTtRQWZDLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUs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SUFBSTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBR0QsNkJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUM7SUFFNUgsQ0FBQztJQTFGWSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDO3lDQW1Cc0MseUJBQWdCO09BbEIzQyxZQUFZLENBMkZ4QjtJQUFELG1CQUFDO0NBQUEsQUEzRkQsSUEyRkM7QUEzRlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XG5cbi8vaW1wb3J0IG9mIHRoZSBnZW8gbG9jYXRpb25cbmltcG9ydCB7IGlzRW5hYmxlZCwgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LCBnZXRDdXJyZW50TG9jYXRpb24sIHdhdGNoTG9jYXRpb24sIGRpc3RhbmNlLCBjbGVhcldhdGNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgTGF0TG5nIH0gZnJvbSBcIi4uLy4uL0BzaGFyZWQvdmlld01vZGVscy9wb3NpdGlvbk1vZGVsL2xhdExuZy5tb2RlbFwiO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjsgLy8gdXNlZCB0byBkZXNjcmliZSBhdCB3aGF0IGFjY3VyYWN5IHRoZSBsb2NhdGlvbiBzaG91bGQgYmUgZ2V0XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1tYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsYXQgOiBhbnkgO1xuICBsbmcgOiBhbnkgO1xuICB6b29tID0gODtcbiAgbWluWm9vbSA9IDA7XG4gIG1heFpvb20gPSAyMjtcbiAgYmVhcmluZyA9IDA7XG4gIHRpbHQgPSAwO1xuICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcbiAgbWFwVmlldzogTWFwVmlldztcbiAgbGFzdENhbWVyYTogU3RyaW5nO1xuXG5cblxuICB1c2VyTG9jYXRpb246IExhdExuZztcbiAgdXNlck1hcmtlcjogTWFya2VyO1xuICBnZW9sb2NhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIik7XG4gIGJnR2VvIDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zICl7IFxuICAgIHRoaXMudXNlckxvY2F0aW9uPSBuZXcgTGF0TG5nKDAsMCk7XG4gICB9XG5cbiAgbmdPbkluaXQoKSB7ICBcbiAgfVxuIFxuXG4gICAgTWFya0xvY2F0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJNYXJraW5nIExvY2F0aW9uXCIpO1xuICAgICAgaWYodGhpcy51c2VyTWFya2VyPT1udWxsKXtcbiAgICAgICAgdGhpcy5zZXRNYXJrZXIoKTtcbiAgICAgICAgdGhpcy5tYXBWaWV3Lnpvb209MTg7XG5cbiAgfVxuICAgICAgfVxuXG4gICAgICBcbiAgIC8vTWFwIGV2ZW50c1xuICAgb25NYXBSZWFkeShldmVudCkge1xuICAgIHRoaXMuZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KClcbiAgICBjb25zb2xlLmxvZygnTWFwIFJlYWR5Jyk7XG4gICAgdGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBjdXJyZW50IGxvY2F0aW9uXCIpO1xuICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgbWF4aW11bUFnZTogNTAwMCwgdGltZW91dDogMTAwMDAgfSlcbiAgICAudGhlbihsb2NhdGlvbiA9PntcbiAgICAgIHRoaXMubWFwVmlldy5sYXRpdHVkZT1sb2NhdGlvbi5sYXRpdHVkZSxcbiAgICAgIHRoaXMubWFwVmlldy5sb25naXR1ZGU9IGxvY2F0aW9uLmxvbmdpdHVkZSxcbiAgICAgIHRoaXMudXNlckxvY2F0aW9uLmxhdD1sb2NhdGlvbi5sYXRpdHVkZSxcbiAgICAgIHRoaXMudXNlckxvY2F0aW9uLmxuZz1sb2NhdGlvbi5sb25naXR1ZGVcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIG9sZCBtYXJrZXJcIik7XG4gICAgdGhpcy5tYXBWaWV3LnJlbW92ZU1hcmtlcih0aGlzLnVzZXJNYXJrZXIpO1xuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICB0aGlzLk1hcmtMb2NhdGlvbigpO1xuICB9XG5cbiAgc2V0TWFya2VyKCl7XG4gICAgY29uc29sZS5sb2coXCJTZXR0aW5nIGEgbWFya2VyLi4uXCIpO1xuICAgIHRoaXMudXNlck1hcmtlciA9IG5ldyBNYXJrZXIoKTtcbiAgICB0aGlzLnVzZXJNYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcodGhpcy5tYXBWaWV3LmxhdGl0dWRlLCB0aGlzLm1hcFZpZXcubG9uZ2l0dWRlKTtcbiAgICB0aGlzLnVzZXJNYXJrZXIudXNlckRhdGEgPSB7aW5kZXg6IDF9O1xuICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIodGhpcy51c2VyTWFya2VyKTtcbiAgICB9XG4gICAgXG5cblxub25Db29yZGluYXRlVGFwcGVkKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGUgVGFwcGVkLCBMYXQ6IFwiICsgYXJncy5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xufVxuXG5vbk1hcmtlckV2ZW50KGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcbiAgICAgICAgKyBcIicgdHJpZ2dlcmVkIG9uOiBcIiArIGFyZ3MubWFya2VyLnRpdGxlXG4gICAgICAgICsgXCIsIExhdDogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlLCBhcmdzKTtcbn1cblxub25DYW1lcmFDaGFuZ2VkKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBjaGFuZ2VkOiBcIiArIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSwgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpID09PSB0aGlzLmxhc3RDYW1lcmEpO1xuICAgIHRoaXMubWFwVmlldy56b29tPTExO1xuICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcbiAgXG59XG5cbm9uQ2FtZXJhTW92ZShhcmdzKSB7XG4gICAgY29uc29sZS5sb2coXCJDYW1lcmEgbW92aW5nOiBcIiArIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSk7XG59XG5cblxuZ29CZWNrKCl7XG4gIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIuLi9uZXctdGFza1wiXSwge3F1ZXJ5UGFyYW1zOiB7bGF0OiB0aGlzLnVzZXJMb2NhdGlvbi5sYXQgLCBsbmc6IHRoaXMudXNlckxvY2F0aW9uLmxuZ319KTtcbiAgXG59XG59XG4iXX0=