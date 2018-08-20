"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
// Important - must register MapView plugin in order to use in Angular templates
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.latitude = -33.86;
        this.longitude = 151.20;
        this.zoom = 8;
        this.minZoom = 0;
        this.maxZoom = 22;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
    }
    MapComponent.prototype.ngOnInit = function () { };
    //Map events
    MapComponent.prototype.onMapReady = function (event) {
        console.log('Map Ready');
        this.mapView = event.object;
        console.log("Setting a marker...");
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(-33.86, 151.20);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
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
        this.lastCamera = JSON.stringify(args.camera);
    };
    MapComponent.prototype.onCameraMove = function (args) {
        console.log("Camera moving: " + JSON.stringify(args.camera));
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMEVBQXdFO0FBQ3hFLDZFQUF5RTtBQUV6RSxnRkFBZ0Y7QUFDaEYsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLHNDQUFPLEVBQVAsQ0FBTyxDQUFDLENBQUM7QUFRMUM7SUFhRTtRQVpBLGFBQVEsR0FBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFLWCxDQUFDO0lBRWpCLCtCQUFRLEdBQVIsY0FBYSxDQUFDO0lBQ2IsWUFBWTtJQUNaLGlDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRW5DLElBQUksTUFBTSxHQUFHLElBQUkscUNBQU0sRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsdUNBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN4QixNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM3QixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTO2NBQ3hDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztjQUN0QyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBakRZLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7O09BQ1csWUFBWSxDQW1EeEI7SUFBRCxtQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgTWFwVmlldywgTWFya2VyLCBQb3NpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuXG4vLyBJbXBvcnRhbnQgLSBtdXN0IHJlZ2lzdGVyIE1hcFZpZXcgcGx1Z2luIGluIG9yZGVyIHRvIHVzZSBpbiBBbmd1bGFyIHRlbXBsYXRlc1xucmVnaXN0ZXJFbGVtZW50KCdNYXBWaWV3JywgKCkgPT4gTWFwVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1tYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsYXRpdHVkZSA9ICAtMzMuODY7XG4gIGxvbmdpdHVkZSA9IDE1MS4yMDtcbiAgem9vbSA9IDg7XG4gIG1pblpvb20gPSAwO1xuICBtYXhab29tID0gMjI7XG4gIGJlYXJpbmcgPSAwO1xuICB0aWx0ID0gMDtcbiAgcGFkZGluZyA9IFs0MCwgNDAsIDQwLCA0MF07XG4gIG1hcFZpZXc6IE1hcFZpZXc7XG5cbiAgbGFzdENhbWVyYTogU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cbiAgIC8vTWFwIGV2ZW50c1xuICAgb25NYXBSZWFkeShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdNYXAgUmVhZHknKTtcblxuICAgIHRoaXMubWFwVmlldyA9IGV2ZW50Lm9iamVjdDtcblxuICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBhIG1hcmtlci4uLlwiKTtcblxuICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XG4gICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKC0zMy44NiwgMTUxLjIwKTtcbiAgICBtYXJrZXIudGl0bGUgPSBcIlN5ZG5leVwiO1xuICAgIG1hcmtlci5zbmlwcGV0ID0gXCJBdXN0cmFsaWFcIjtcbiAgICBtYXJrZXIudXNlckRhdGEgPSB7aW5kZXg6IDF9O1xuICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbn1cblxub25Db29yZGluYXRlVGFwcGVkKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGUgVGFwcGVkLCBMYXQ6IFwiICsgYXJncy5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xufVxuXG5vbk1hcmtlckV2ZW50KGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWVcbiAgICAgICAgKyBcIicgdHJpZ2dlcmVkIG9uOiBcIiArIGFyZ3MubWFya2VyLnRpdGxlXG4gICAgICAgICsgXCIsIExhdDogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlLCBhcmdzKTtcbn1cblxub25DYW1lcmFDaGFuZ2VkKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBjaGFuZ2VkOiBcIiArIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSwgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpID09PSB0aGlzLmxhc3RDYW1lcmEpO1xuICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcbn1cblxub25DYW1lcmFNb3ZlKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBtb3Zpbmc6IFwiICsgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpKTtcbn1cblxufVxuIl19