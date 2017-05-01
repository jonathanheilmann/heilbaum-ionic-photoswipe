import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HeilbaumPhotoswipeComponent } from "./components/heilbaum-photoswipe";
import { HeilbaumPhotoswipeController } from "./providers/heilbaum-photoswipe";

@NgModule({
    declarations: [
        HeilbaumPhotoswipeComponent
    ],
    entryComponents: [
        HeilbaumPhotoswipeComponent
    ],
    exports: [
        HeilbaumPhotoswipeComponent
    ],
    imports: [
        IonicModule
    ],
    providers: [
        HeilbaumPhotoswipeController
    ]
})
export class HeilbaumPhotoswipeModule {}