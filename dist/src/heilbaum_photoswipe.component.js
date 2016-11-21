System.register(["@angular/core", "./photoswipe/styles", "ionic-angular", "./photoswipe/template", "./photoswipe/photoswipe", "./photoswipe/photoswipe-ui-default"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, styles_1, ionic_angular_1, template_1, photoswipe_1, photoswipe_ui_default_1;
    var HeilBaumPhotoSwipeComponent, heilBaumPhotoSwipeId;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (ionic_angular_1_1) {
                ionic_angular_1 = ionic_angular_1_1;
            },
            function (template_1_1) {
                template_1 = template_1_1;
            },
            function (photoswipe_1_1) {
                photoswipe_1 = photoswipe_1_1;
            },
            function (photoswipe_ui_default_1_1) {
                photoswipe_ui_default_1 = photoswipe_ui_default_1_1;
            }],
        execute: function() {
            HeilBaumPhotoSwipeComponent = (function () {
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
                    this.gallery = new photoswipe_1.PhotoSwipe(pswpElement, photoswipe_ui_default_1.PhotoSwipeUI_Default, this.items, this.options);
                    this.gallery.init();
                    this.gallery.listen('destroy', function () {
                        _this.viewCtrl.dismiss();
                    });
                };
                HeilBaumPhotoSwipeComponent = __decorate([
                    core_1.Component({
                        selector: 'heilbaum-photoswipe',
                        styles: [styles_1.photoswipeStyles, styles_1.photoswipeDefaultSkin],
                        template: template_1.default,
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, ionic_angular_1.NavParams, ionic_angular_1.ViewController])
                ], HeilBaumPhotoSwipeComponent);
                return HeilBaumPhotoSwipeComponent;
            }());
            exports_1("HeilBaumPhotoSwipeComponent", HeilBaumPhotoSwipeComponent);
            heilBaumPhotoSwipeId = -1;
        }
    }
});
//# sourceMappingURL=heilbaum_photoswipe.component.js.map