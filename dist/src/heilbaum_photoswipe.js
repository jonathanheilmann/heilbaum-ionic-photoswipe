var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ViewController, App } from "ionic-angular";
import { HeilBaumPhotoSwipeComponent } from "./heilbaum_photoswipe.component";
import { Injectable } from "@angular/core";
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
        return this._app.present(this, navOptions, 1 /* MODAL */);
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
    HeilBaumPhotoSwipeController.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HeilBaumPhotoSwipeController.ctorParameters = [
        { type: App, },
    ];
    return HeilBaumPhotoSwipeController;
}());
//# sourceMappingURL=heilbaum_photoswipe.js.map