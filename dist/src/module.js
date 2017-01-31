import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeilBaumPhotoSwipeComponent } from "./heilbaum_photoswipe.component";
import { HeilBaumPhotoSwipeController } from "./heilbaum_photoswipe";
export var HeilBaumPhotoSwipeModule = (function () {
    function HeilBaumPhotoSwipeModule() {
    }
    HeilBaumPhotoSwipeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IonicModule],
                    declarations: [
                        HeilBaumPhotoSwipeComponent
                    ],
                    entryComponents: [HeilBaumPhotoSwipeComponent],
                    providers: [HeilBaumPhotoSwipeController]
                },] },
    ];
    /** @nocollapse */
    HeilBaumPhotoSwipeModule.ctorParameters = [];
    return HeilBaumPhotoSwipeModule;
}());
//# sourceMappingURL=module.js.map