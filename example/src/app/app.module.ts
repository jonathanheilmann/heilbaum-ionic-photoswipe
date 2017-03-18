import { NgModule, ErrorHandler } from '@angular/core';
import { ObjectFitImagesModule } from "heilbaum-ionic-object-fit-images";
import { HeilbaumPhotoswipeModule } from "heilbaum-ionic-photoswipe";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { DocumentationPage } from "../pages/documentation/documentation";
import { ExamplePage } from "../pages/example/example";
import { GettingStartedPage } from "../pages/getting-started/getting-started";

@NgModule({
  declarations: [
    MyApp,
    DocumentationPage,
    ExamplePage,
    GettingStartedPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [{
        component: GettingStartedPage,
        name: 'Getting Started',
        segment: 'getting-started'
      }, {
        component: ExamplePage,
        name: 'Example',
        segment: 'example'
      }, {
        component: DocumentationPage,
        name: 'documentation',
        segment: 'documentation'
      }]
    }),
    ObjectFitImagesModule,
    HeilbaumPhotoswipeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DocumentationPage,
    ExamplePage,
    GettingStartedPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
