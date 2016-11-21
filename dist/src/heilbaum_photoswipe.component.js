var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    HeilBaumPhotoSwipeComponent = __decorate([
        Component({
            selector: 'heilbaum-photoswipe',
            styles: [photoswipeStyles, photoswipeDefaultSkin],
            template: photoswipeTemplate,
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [ElementRef, NavParams, ViewController])
    ], HeilBaumPhotoSwipeComponent);
    return HeilBaumPhotoSwipeComponent;
}());
var heilBaumPhotoSwipeId = -1;
//# sourceMappingURL=heilbaum_photoswipe.component.js.map