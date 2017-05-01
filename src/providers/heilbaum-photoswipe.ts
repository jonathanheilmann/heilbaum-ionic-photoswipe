import { Injectable } from "@angular/core";
import { ViewController, App } from "ionic-angular";
import { AppPortal } from "ionic-angular/components/app/app-root";

import { HeilbaumPhotoswipeComponent } from "../components/heilbaum-photoswipe";
import { PhotoswipeItem } from "../photoswipe/PhotoswipeItem";
import { PhotoswipeOptions } from "../photoswipe/PhotoswipeOptions";

export class HeilbaumPhotoswipe extends ViewController {
    private _app: App;

    /**
     * Constructor of class
     *
     * @param app
     * @param data
     */
    constructor(app: App, data: any) {
        data = data || {};

        super(HeilbaumPhotoswipeComponent, data, '');
        this._app = app;
        this.isOverlay = true;
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
export class HeilbaumPhotoswipeController {

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
     * @returns {HeilbaumPhotoswipe}
     */
    create(items: Array<PhotoswipeItem>, options: PhotoswipeOptions = {}) {
        return new HeilbaumPhotoswipe(this._app, {items, options})
    }

}
