/// <reference types="es6-shim" />
import { PhotoSwipeItem } from "./photoswipe/PhotoSwipeItem";
import { ViewController, App } from "ionic-angular";
import { PhotoSwipeOptions } from "./photoswipe/PhotoSwipeOptions";
export declare class HeilBaumPhotoSwipe extends ViewController {
    private _app;
    /**
     * Constructor of class
     *
     * @param app
     * @param data
     */
    constructor(app: App, data: any);
    /**
     * Presents the action sheet instance.
     *
     * @param navOptions
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions?: {}): Promise<any>;
}
export declare class HeilBaumPhotoSwipeController {
    private _app;
    /**
     * Constructor of class
     *
     * @param _app
     */
    constructor(_app: App);
    /**
     * Creates a new PhotoSwipe instance
     *
     * @param items
     * @param options
     * @returns {HeilBaumPhotoSwipe}
     */
    create(items: Array<PhotoSwipeItem>, options?: PhotoSwipeOptions): HeilBaumPhotoSwipe;
}
