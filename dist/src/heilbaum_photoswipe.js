var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ViewController, App } from "ionic-angular";
import { HeilBaumPhotoSwipeComponent } from "./heilbaum_photoswipe.component";
import { Injectable } from "@angular/core";
import { AppPortal } from "ionic-angular/components/app/app-root";
export var HeilBaumPhotoSwipe = (function (_super) {
    __extends(HeilBaumPhotoSwipe, _super);
    /**
     * Constructor of class
     *
     * @param app
     * @param data
     */
    function HeilBaumPhotoSwipe(app, data) {
        data = data || {};
        _super.call(this, HeilBaumPhotoSwipeComponent, data, '');
        this._app = app;
        this.isOverlay = true;
        this.setLeavingOpts({ animate: false });
    }
    /**
     * Presents the action sheet instance.
     *
     * @param navOptions
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    HeilBaumPhotoSwipe.prototype.present = function (navOptions) {
        if (navOptions === void 0) { navOptions = {}; }
        return this._app.present(this, navOptions, AppPortal.MODAL);
    };
    return HeilBaumPhotoSwipe;
}(ViewController));
export var HeilBaumPhotoSwipeController = (function () {
    /**
     * Constructor of class
     *
     * @param _app
     */
    function HeilBaumPhotoSwipeController(_app) {
        this._app = _app;
    }
    /**
     * Creates a new PhotoSwipe instance
     *
     * @param items
     * @param options
     * @returns {HeilBaumPhotoSwipe}
     */
    HeilBaumPhotoSwipeController.prototype.create = function (items, options) {
        if (options === void 0) { options = {}; }
        return new HeilBaumPhotoSwipe(this._app, { items: items, options: options });
    };
    HeilBaumPhotoSwipeController = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [App])
    ], HeilBaumPhotoSwipeController);
    return HeilBaumPhotoSwipeController;
}());
//# sourceMappingURL=heilbaum_photoswipe.js.map