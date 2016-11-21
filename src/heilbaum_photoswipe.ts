import { PhotoSwipeItem } from "./photoswipe/PhotoSwipeItem";
import { ViewController, App } from "ionic-angular";
import { HeilBaumPhotoSwipeComponent } from "./heilbaum_photoswipe.component";
import { Injectable } from "@angular/core";
import { AppPortal } from "ionic-angular/components/app/app-root";
import { PhotoSwipeOptions } from "./photoswipe/PhotoSwipeOptions";

export class HeilBaumPhotoSwipe extends ViewController {
    private _app: App;

    /**
     * Constructor of class
     *
     * @param app
     * @param data
     */
    constructor(app: App, data: any) {
        data = data || {};

        super(HeilBaumPhotoSwipeComponent, data, '');
        this._app = app;
        this.isOverlay = true;
        this.setLeavingOpts({animate: false});
    }

    /**
     * Presents the action sheet instance.
     *
     * @param navOptions
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions = {}) {
        return this._app.present(this, navOptions, AppPortal.MODAL);
    }

}

@Injectable()
export class HeilBaumPhotoSwipeController {

    /**
     * Constructor of class
     *
     * @param _app
     */
    constructor(private _app: App) {
    }

    /**
     * Creates a new PhotoSwipe instance
     *
     * @param items
     * @param options
     * @returns {HeilBaumPhotoSwipe}
     */
    create(items: Array<PhotoSwipeItem>, options: PhotoSwipeOptions = {}) {
        return new HeilBaumPhotoSwipe(this._app, {items, options})
    }

}
