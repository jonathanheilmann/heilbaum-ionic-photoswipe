import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef } from "@angular/core";
import { photoswipeStyles, photoswipeDefaultSkin } from "./photoswipe/styles";
import { NavParams, ViewController } from "ionic-angular";
import photoswipeTemplate from "./photoswipe/template";
import { PhotoSwipe } from "./photoswipe/photoswipe";
import { PhotoSwipeUI_Default } from "./photoswipe/photoswipe-ui-default";
export var HeilBaumPhotoSwipeComponent = (function () {
    /**
     * Constructor of class
     *
     * @param elementRef
     * @param navParams
     * @param viewCtrl
     */
    function HeilBaumPhotoSwipeComponent(elementRef, navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.items = [];
        this.options = {};
        this.gallery = null;
        this.ele = elementRef.nativeElement;
        this.id = ++heilBaumPhotoSwipeId;
        this.heilBaumPhotoSwipeId = 'heilbaum-photoswiper-' + this.id;
        this.ele.classList.add(this.heilBaumPhotoSwipeId);
    }
    /**
     * Angular 2 Lifecycle Hook
     */
    HeilBaumPhotoSwipeComponent.prototype.ngOnInit = function () {
        this.items = this.navParams.get('items');
        this.options = this.navParams.get('options') ? this.navParams.get('options') : {};
    };
    /**
     * Angular 2 Lifecycle Hook
     */
    HeilBaumPhotoSwipeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var pswpElement = document.querySelectorAll('.pswp')[0];
        this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.items, this.options);
        this.gallery.init();
        this.gallery.listen('destroy', function () {
            _this.viewCtrl.dismiss();
        });
    };
    HeilBaumPhotoSwipeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'heilbaum-photoswipe',
                    styles: [photoswipeStyles, photoswipeDefaultSkin],
                    template: photoswipeTemplate,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    HeilBaumPhotoSwipeComponent.ctorParameters = [
        { type: ElementRef, },
        { type: NavParams, },
        { type: ViewController, },
    ];
    return HeilBaumPhotoSwipeComponent;
}());
var heilBaumPhotoSwipeId = -1;
//# sourceMappingURL=heilbaum_photoswipe.component.js.map