import {
    Component, OnInit, AfterViewInit, ElementRef, ViewEncapsulation,
    ChangeDetectionStrategy, OnDestroy, Renderer2
} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { PhotoswipeDefaultSkin, PhotoswipeStyles } from './styles';
import { PhotoswipeTemplate } from './template';
import { PhotoswipeItem } from '../photoswipe/PhotoswipeItem';

declare const PhotoSwipe: any;
declare const PhotoSwipeUI_Default: any;

@Component({
    selector: 'heilbaum-photoswipe',
    styles: [PhotoswipeStyles, PhotoswipeDefaultSkin],
    template: PhotoswipeTemplate,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class HeilbaumPhotoswipeComponent implements OnInit, AfterViewInit, OnDestroy {

    private id: number;
    private heilBaumPhotoSwipeId: string;

    private items: Array<PhotoswipeItem> = [];
    private options: Object = {};

    public gallery: any = null;

    private onPopstate = () => {
        if (this.gallery) {
            this.gallery.close();
        }
        return;
    };

    /**
     * Constructor of class
     *
     * @param elementRef
     * @param navParams
     * @param renderer
     * @param viewCtrl
     */
    constructor(
        private elementRef: ElementRef,
        private navParams: NavParams,
        private renderer: Renderer2,
        private viewCtrl: ViewController
    ) {
        this.id = ++heilBaumPhotoSwipeId;
        this.heilBaumPhotoSwipeId = 'heilbaum-photoswiper-' + this.id;

        this.renderer.addClass(this.elementRef.nativeElement, this.heilBaumPhotoSwipeId);
    }

    /**
     * Angular 2 Lifecycle Hook
     */
    ngOnInit() {
        this.items = this.navParams.get('items');
        this.options = this.navParams.get('options') ? this.navParams.get('options') : {};

        // Add eventListener to handle browser navigation changes closing PhotoSwipe
        window.addEventListener('popstate', this.onPopstate, false);
    }

    /**
     * Angular 2 Lifecycle Hook
     */
    ngAfterViewInit(): void {
        const pswpElement: Element = this.elementRef.nativeElement.firstElementChild;

        this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.items, this.options);
        this.gallery.init();

        this.gallery.listen('destroy', () => {
            // This is required to remove component from DOM
            this.viewCtrl.dismiss();
        });

    }

    /**
     * Angular 2 Lifecycle Hook
     */
    ngOnDestroy(): void {
        // Remove eventListener
        window.removeEventListener('popstate', this.onPopstate, false);
    }

}

let heilBaumPhotoSwipeId = -1;
