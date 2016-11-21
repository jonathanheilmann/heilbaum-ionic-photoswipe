import { OnInit, AfterViewInit, ElementRef } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";
export declare class HeilBaumPhotoSwipeComponent implements OnInit, AfterViewInit {
    private navParams;
    private viewCtrl;
    private ele;
    private id;
    private heilBaumPhotoSwipeId;
    private items;
    private options;
    gallery: any;
    /**
     * Constructor of class
     *
     * @param elementRef
     * @param navParams
     * @param viewCtrl
     */
    constructor(elementRef: ElementRef, navParams: NavParams, viewCtrl: ViewController);
    /**
     * Angular 2 Lifecycle Hook
     */
    ngOnInit(): void;
    /**
     * Angular 2 Lifecycle Hook
     */
    ngAfterViewInit(): void;
}
