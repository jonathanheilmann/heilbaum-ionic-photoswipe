import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HeilBaumPhotoSwipeComponent } from "./heilbaum_photoswipe.component";

@NgModule({
    imports: [IonicModule],
    declarations: [
        HeilBaumPhotoSwipeComponent
    ],
    entryComponents: [ HeilBaumPhotoSwipeComponent ]
})
export class HeilBaumPhotoSwipeModule {}