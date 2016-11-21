import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HeilBaumPhotoSwipeComponent } from "./heilbaum_photoswipe.component";
import { HeilBaumPhotoSwipeController } from "./heilbaum_photoswipe";

@NgModule({
    imports: [IonicModule],
    declarations: [
        HeilBaumPhotoSwipeComponent
    ],
    entryComponents: [ HeilBaumPhotoSwipeComponent ],
    providers: [ HeilBaumPhotoSwipeController ]
})
export class HeilBaumPhotoSwipeModule {}