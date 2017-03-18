import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-documentation',
  templateUrl: 'documentation.html'
})
export class DocumentationPage {

  protected code: {
    heilbaumPhotoswipeController: { example: string },
    photoswipeOptions: { example: string },
    photoswipeItem: { type: string }
  } = {
    heilbaumPhotoswipeController: { example: '' },
    photoswipeOptions: { example: '' },
    photoswipeItem: { type: '' }
  };

  /**
   * Constructor of class
   *
   * @param navCtrl
   * @param navParams
   */
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.code.heilbaumPhotoswipeController.example = `const pswp: HeilbaumPhotoswipe = this.pswpCtrl.create(photoswipeItems, options);
pswp.present({ animate: false });
pswp.setLeavingOpts({ animate: false });`;
    this.code.photoswipeOptions.example = `const photoswipeOptions: PhotoswipeOptions = {
  history: false,
  clickToCloseNonZoomable: false,
  showHideOpacity: true
};`;
    this.code.photoswipeItem.type = `type PhotoswipeItem = {
    src?: string;
    w?: number;
    h?: number;
    html?: string;
    title?: string;
    custom?: any;
};`;
  }

}
